import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { omit, isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import clipboardCopy from 'clipboard-copy';
import { send } from '@giantmachines/redux-websocket';

import Grid from "@material-ui/core/Grid";
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';

import evidences, {
  EMF, FINGERPRINTS, FREEZING,
  GHOST_WRITING, SPIRIT_BOX, GHOST_ORB,
} from '../../data/evidences';

import {
  UNKNOWN, FOUND, RULED_OUT
} from "../../data/evidenceStates";

import quests from '../../data/quests';

import {
  pickerStateSelector,
  sessionIdSelector,
  connectionStatusSelector,
  activeClientsSelector,
  filteredGhostsSelector,
  ghostCountByEvidenceSelector,
  selectedEvidenceSelector,
} from '../../selectors';

import {
  updateGhostName, filterGhosts, updateSelectedQuests,
  resetPicker, updateAnswersEveryoneButton,
} from '../../actions';

import CustomButton from './Buttons/CustomButton';
import GhostCard from './GhostCard';

import useStyles from './styles';

const Picker = ({ changePage, resetSession }) => {
  const dispatch = useDispatch();
  const css = useStyles();
  const evidenceColors = {
    [EMF]: 'red',
    [FINGERPRINTS]: 'green',
    [FREEZING]: 'dodgerblue',
    [GHOST_ORB]: 'brown',
    [GHOST_WRITING]: 'purple',
    [SPIRIT_BOX]: 'cadetblue',
  };

  const pickerState = useSelector((state) => pickerStateSelector(state));
  const sessionId = useSelector((state) => sessionIdSelector(state));
  const connectionStatus = useSelector((state) => connectionStatusSelector(state));
  const activeClients = useSelector((state) => activeClientsSelector(state));
  const ghosts = useSelector((state) => filteredGhostsSelector(state));
  const ghostCounts = useSelector((state) => ghostCountByEvidenceSelector(state));
  const selectedEvidences = useSelector((state) => selectedEvidenceSelector(state));

  const [copyHintText, setCopyHintText] = useState('Click to copy URL');

  useEffect(() => {
    if (connectionStatus) {
      dispatch(send({ action: 'ENTER_APP', data: { sessionId } }));
    }
  }, [dispatch, connectionStatus, sessionId]);

  const handleGhostNameChange = (name) => {
    dispatch(updateGhostName(name));
  };

  const handleRuleOutButtonClick = (evidence, isActive) => {
    dispatch(filterGhosts(evidence, isActive ? RULED_OUT : UNKNOWN));
  };

  const handleEvidenceButtonClick = (evidence, isActive) => {
    dispatch(filterGhosts(evidence, isActive ? FOUND : UNKNOWN));
  };

  const handleQuestButtonClick = (quest, isActive) => {
    dispatch(updateSelectedQuests(quest, isActive));
  };

  const handleAnswersEveryoneButton = (text, isActive) => {
    dispatch(updateAnswersEveryoneButton(isActive));
  };

  const handleReset = () => {
    dispatch(resetPicker());
  };

  const handleCopySessionIdClick = () => {
    let url = window.location.href;
    url = url.substring(0, url.lastIndexOf('/') + 1);
    url = url.replace(/\/+(\d{6})\/*$/, '');
    url += '/' + sessionId + '/';

    clipboardCopy(url).then(() => {
      setCopyHintText('Copied to clipboard!');

      setTimeout(() => {
        setCopyHintText('Click to copy URL');
      }, 5000);
    });
  };

  const { ghostName, evidenceButtons, questButtons, talksToEveryOne } = pickerState;

  const maxCount = Math.max(...Object.values(omit(ghostCounts, selectedEvidences)));
  const countClassSelector = (count) => ({
    [maxCount]: css.best,
    0: css.impossible,
  }[count] || css.normal);

  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Box className={css.wrapper}>
        <Box className={css.sessionControls}>
          {
            sessionId !== '' && (
              <>
                <Box className={css.sessionIdWrapper}>
                  <Typography>{`Active clients: ${activeClients}`}</Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" />
                <Box className={css.sessionIdWrapper}>
                  <Typography>Session id:</Typography>
                  <Tooltip title={copyHintText}>
                    <Button onClick={handleCopySessionIdClick}>{sessionId}</Button>
                  </Tooltip>
                </Box>
              </>
            )
          }
          <Tooltip title="Exit room">
            <IconButton onClick={() => resetSession()}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="To questions">
            <IconButton onClick={() => changePage('questions')}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={css.header}>
          <Typography variant="h3">Ghost Picker</Typography>
        </Box>
        <Box className={css.inputWrapper}>
          <TextField
            id="ghost-name"
            label="Ghost Name"
            variant="outlined"
            value={ghostName}
            onChange={(e) => handleGhostNameChange(e.target.value)}
          />
          <CustomButton isActive={talksToEveryOne} color="grey" text="Answers everyone" handleClick={handleAnswersEveryoneButton} />
          <CustomButton color="grey" text="Reset" handleClick={handleReset} />
        </Box>
        <Typography variant="h4">Evidences</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          {
            evidences.map((evidence) =>
            {
              const evidenceState = evidenceButtons[evidence];
              const color = evidenceColors[evidence];
              const count = ghostCounts[evidence];
              const wrapperClasses = [css.evidenceWrapper];

              if (!count)
                wrapperClasses.push(css.ruledOut);

              return (
                <Box key={evidence}>
                  <CustomButton isActive={evidenceState === RULED_OUT} className={css.xButton} color="grey" text="&times;" handleClick={(_, isActive) => handleRuleOutButtonClick(evidence, isActive)} />
                  <Box className={wrapperClasses.join(' ')}>
                    <CustomButton isActive={evidenceState === FOUND} color={color} text={evidence} handleClick={handleEvidenceButtonClick} />
                    <Typography className={[css.count, countClassSelector(count)].join(' ')}>{count} {count === 1 ? 'ghost' : 'ghosts'}</Typography>
                  </Box>
                </Box>
              );
            })
          }
        </Box>
        <Typography variant="h4">Quests</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          {
            quests.map((quest) => (
              <CustomButton isActive={questButtons[quest]} color="grey" key={quest} text={quest} handleClick={handleQuestButtonClick} />
            ))
          }
        </Box>
        <Grid container className={css.ghostsWrapper}>
          {
            ghosts.map((ghost) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={ghost.name}>
                <GhostCard data={ghost} selectedEvidences={selectedEvidences} />
              </Grid>
            ))
          }
          {
            isEmpty(ghosts) ? (
              <Box className={css.noEvidenceWrapper}>
                <Typography variant="h6">
                  No ghosts with such combination of evidences
                </Typography>
              </Box>
            ) : null
          }
        </Grid>
      </Box>
    </Slide>
  );
};

Picker.propTypes = {
  changePage: PropTypes.func.isRequired,
  resetSession: PropTypes.func.isRequired,
};

export default Picker;
