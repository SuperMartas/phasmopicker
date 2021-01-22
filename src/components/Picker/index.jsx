import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import clipboardCopy from 'clipboard-copy';
import { send } from '@giantmachines/redux-websocket';

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

  const pickerState = useSelector((state) => pickerStateSelector(state));
  const sessionId = useSelector((state) => sessionIdSelector(state));
  const connectionStatus = useSelector((state) => connectionStatusSelector(state));
  const activeClients = useSelector((state) => activeClientsSelector(state));

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
          <CustomButton type="evidence" color="red" text={EMF} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="green" text={FINGERPRINTS} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="brown" text={GHOST_ORB} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="purple" text={GHOST_WRITING} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="cadetblue" text={SPIRIT_BOX} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="dodgerblue" text={TEMPERATURE} handleClick={handleEvidenceButtonClick} />
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
        <Box className={css.ghostsWrapper}>
          {
            ghosts.map((ghost) => (
              <GhostCard data={ghost} key={ghost.name} selectedEvidences={selectedEvidences} />
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
        </Box>
      </Box>
    </Slide>
  );
};

Picker.propTypes = {
  changePage: PropTypes.func.isRequired,
  resetSession: PropTypes.func.isRequired,
};

export default Picker;
