import {
  EMF, FINGERPRINTS, FREEZING,
  GHOST_WRITING, GHOST_ORB, SPIRIT_BOX,
} from './evidences';

const ghosts = [
  {
    name: 'Banshee',
    evidences: [EMF, FINGERPRINTS, FREEZING],
    strength: 'Only targets one player at a time',
    weakness: 'Hates the Crucifix',
  },

  {
    name: 'Demon',
    evidences: [FREEZING, GHOST_WRITING, SPIRIT_BOX],
    strength: 'Extremely aggressive',
    weakness: 'Using the Ouija board to ask successful questions does not drain sanity',
  },

  {
    name: 'Jinn',
    evidences: [EMF, GHOST_ORB, SPIRIT_BOX],
    strength: 'Moves faster the further away you are from it',
    weakness: 'Cutting off the location’s power supply will limit the Jinn’s speed',
  },

  {
    name: 'Mare',
    evidences: [FREEZING, GHOST_ORB, SPIRIT_BOX],
    strength: 'Attacks more frequently in the dark, tends to switch off lights',
    weakness: 'Keeping the lights on',
  },

  {
    name: 'Oni',
    evidences: [EMF, GHOST_WRITING, SPIRIT_BOX],
    strength: 'Extremely active and moves objects quickly',
    weakness: 'Extreme activity with lots of players nearby makes it easy to identify',
  },

  {
    name: 'Phantom',
    evidences: [EMF, FREEZING, GHOST_ORB],
    strength: 'Looking at the Phantom will reduce your sanity',
    weakness: 'Capturing a photo will cause it to disappear, not during a hunt',
  },

  {
    name: 'Poltergeist',
    evidences: [GHOST_ORB, FINGERPRINTS, SPIRIT_BOX],
    strength: 'Throws multiple objects about at once',
    weakness: 'Rooms without any stuff in to throw',
  },

  {
    name: 'Revenant',
    evidences: [EMF, FINGERPRINTS, GHOST_WRITING],
    strength: 'Travels twice as fast when chasing player, can switch victim',
    weakness: 'Moves extremely slowly when players hide',
  },

  {
    name: 'Shade',
    evidences: [EMF, GHOST_ORB, GHOST_WRITING],
    strength: 'Minimal activity, hard to find and detect',
    weakness: 'Does not hunt if players are in a group',
  },

  {
    name: 'Spirit',
    evidences: [FINGERPRINTS, GHOST_WRITING, SPIRIT_BOX],
    strength: 'No strengths',
    weakness: 'Using smudge sticks stops from starting hunt for a long time',
  },

  {
    name: 'Wraith',
    evidences: [FINGERPRINTS, FREEZING, SPIRIT_BOX],
    strength: 'Can fly through walls and does not leave footprints',
    weakness: 'Salt is toxic for Wraith',
  },

  {
    name: 'Yurei',
    evidences: [FREEZING, GHOST_ORB, GHOST_WRITING],
    strength: 'Drains player sanity especially quickly',
    weakness: 'Smudge stick in the same room will stop the Yurei from wandering',
  },
];

export default ghosts;
