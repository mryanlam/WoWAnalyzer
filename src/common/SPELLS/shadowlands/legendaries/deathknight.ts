import { LegendarySpell, SpellList } from "common/SPELLS/Spell";

const legendaries: SpellList<LegendarySpell> = {
  //region Blood
  BRYNDAORS_MIGHT: {
    id: 334501,
    name: 'Bryndaor\'s Might',
    icon: 'ability_creature_cursed_04',
    bonusID: 6940
  },
  BRYNDAORS_MIGHT_RUNIC_POWER_GAIN: {
    id: 334502,
    name: 'Bryndaor\'s Might',
    icon: 'ability_creature_cursed_04'
  },

  //endregion

  //region Frost
  RAGE_OF_THE_FROZEN_CHAMPION: {
    id: 341725,
    name: 'Rage of the Frozen Champion',
    icon: 'spell_mage_frostbomb',
  },

  KOLTIRAS_FAVOR_RUNE_GAIN: {
    id: 334584,
    name: 'Koltira\'s Favor',
    icon: 'spell_shadow_focusedpower',
  },

  //endregion

  //region Unholy

  //endregion

  //region Shared

  //endregion
} as const;
export default legendaries;
