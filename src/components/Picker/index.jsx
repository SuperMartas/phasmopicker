import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { has, isEmpty } from 'lodash';
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

import {
  EMF, FINGERPRINTS, TEMPERATURE,
  GHOST_WRITING, SPIRIT_BOX, GHOST_ORB,
} from '../../data/evidences';

import {
  EMF as EMF_QUEST, TEMPERATURE as TEMPERATURE_QUEST,
  CRUCIFIX, EVENT, MOTION, PHOTO, SINK, SMUDGE,
} from '../../data/quests';

import {
  pickerStateSelector,
  sessionIdSelector,
  connectionStatusSelector,
  activeClientsSelector,
  evidenceProbabilitiesSelector,
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
  const evidences = [
    [EMF, 'red'],
    [FINGERPRINTS, 'green'],
    [GHOST_ORB, 'brown'],
    [GHOST_WRITING, 'purple'],
    [SPIRIT_BOX, 'cadetblue'],
    [TEMPERATURE, 'dodgerblue'],
  ];

  const pickerState = useSelector((state) => pickerStateSelector(state));
  const sessionId = useSelector((state) => sessionIdSelector(state));
  const connectionStatus = useSelector((state) => connectionStatusSelector(state));
  const activeClients = useSelector((state) => activeClientsSelector(state));
  const probabilities = useSelector((state) => evidenceProbabilitiesSelector(state));

  const maxProbability = Math.max(...Object.values(probabilities).filter(probability => probability < 1));
  const probabilityClassSelector = (probability) => ({
    0: css.impossible,
    [maxProbability]: css.best,
  }[probability] || css.normal);

  const [copyHintText, setCopyHintText] = useState('Click to copy');

  useEffect(() => {
    if (connectionStatus) {
      dispatch(send({ action: 'ENTER_APP', data: { sessionId } }));
    }
  }, [dispatch, connectionStatus, sessionId]);

  const handleGhostNameChange = (name) => {
    dispatch(updateGhostName(name));
  };

  const handleEvidenceButtonClick = (evidence, isActive) => {
    dispatch(filterGhosts(evidence, isActive));
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
    clipboardCopy(sessionId).then(() => {
      setCopyHintText('Copied to clipboard!');

      setTimeout(() => {
        setCopyHintText('Click to copy');
      }, 5000);
    });
  };

  const { ghostName, ghosts, selectedEvidences } = pickerState;

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
          <CustomButton type="talksToEveryOne" color="grey" text="Answers everyone" handleClick={handleAnswersEveryoneButton} />
          <CustomButton type="reset" color="grey" text="Reset" handleClick={handleReset} />
        </Box>
        <Typography variant="h4">Evidences</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          {
            evidences.map(([evidence, color]) => has(probabilities, evidence) ? (
              <Box className={probabilities[evidence] === 0 ? css.ruledOut : null} key={evidence}>
                <CustomButton type="evidence" color={color} text={evidence} handleClick={handleEvidenceButtonClick} />
                <Typography className={[css.probability, probabilityClassSelector(probabilities[evidence])].join(' ')}>{Math.round(probabilities[evidence] * 100)} %</Typography>
              </Box>
            ) : null)
          }
        </Box>
        <Typography variant="h4">Quests</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          <CustomButton type="quest" color="grey" text={CRUCIFIX} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={EMF_QUEST} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={EVENT} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={MOTION} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={PHOTO} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={SINK} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={SMUDGE} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={TEMPERATURE_QUEST} handleClick={handleQuestButtonClick} />
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
