import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import {
  Abelito75,
  emallson,
  Dambroda,
  Zeboot,
  LeoZhekov,
  Matardarix,
  Hordehobbs,
  Akhtal,
  carglass,
} from 'CONTRIBUTORS';
import { SpellLink } from 'interface';
import React from 'react';

export default [
  change(date(2021, 10, 28), <>Bump supported version to 9.1.5.</>, emallson),
  change(date(2021, 10, 16), <>Added APL support.</>, emallson),
  change(
    date(2021, 5, 23),
    <>
      Reworked <SpellLink id={SPELLS.EXPEL_HARM.id}>Expel Harm</SpellLink> Normalizer to support
      attracted <SpellLink id={SPELLS.GIFT_OF_THE_OX_1.id}>Gift of the Ox Orbs</SpellLink>{' '}
    </>,
    carglass,
  ),
  change(
    date(2021, 3, 12),
    <>
      Adjusted suggestion threshold for <SpellLink id={SPELLS.CELESTIAL_BREW.id} /> cast efficiency.
    </>,
    emallson,
  ),
  change(
    date(2021, 2, 23),
    <>
      Added <SpellLink id={SPELLS.CELESTIAL_EFFERVESCENCE.id} /> statistic module.
    </>,
    Matardarix,
  ),
  change(
    date(2021, 1, 28),
    <>
      Added <SpellLink id={SPELLS.WALK_WITH_THE_OX.id} /> statistic module.
    </>,
    Matardarix,
  ),
  change(
    date(2021, 1, 25),
    <>
      Add support for <SpellLink id={SPELLS.FORTIFYING_INGREDIENTS.id} />,{' '}
      <SpellLink id={SPELLS.GROUNDING_BREATH.id} /> and <SpellLink id={SPELLS.HARM_DENIAL.id} />.
    </>,
    Matardarix,
  ),
  change(
    date(2021, 1, 23),
    <>
      Add wasted cooldown avoided to <SpellLink id={SPELLS.STORMSTOUTS_LAST_KEG.id} /> statistic
      tooltip.
    </>,
    emallson,
  ),
  change(
    date(2021, 1, 18),
    <>
      Add support for <SpellLink id={SPELLS.STORMSTOUTS_LAST_KEG.id} />.
    </>,
    Matardarix,
  ),
  change(
    date(2021, 1, 16),
    <>
      Added <SpellLink id={SPELLS.WALK_WITH_THE_OX.id} /> cooldown reduction.
    </>,
    emallson,
  ),
  change(
    date(2021, 1, 16),
    <>
      Added <SpellLink id={SPELLS.WEAPONS_OF_ORDER_CAST.id} />,{' '}
      <SpellLink id={SPELLS.BONEDUST_BREW_CAST.id} /> and{' '}
      <SpellLink id={SPELLS.FAELINE_STOMP_CAST.id} /> to Brewmaster ability list.
    </>,
    emallson,
  ),
  change(
    date(2020, 12, 28),
    <>
      Bug fixes for <SpellLink id={SPELLS.BLACK_OX_BREW_TALENT.id} />.{' '}
    </>,
    Akhtal,
  ),
  change(
    date(2020, 12, 28),
    <>
      Add support for <SpellLink id={SPELLS.CHI_BURST_TALENT.id} /> and{' '}
      <SpellLink id={SPELLS.CHI_WAVE_TALENT.id} />.{' '}
    </>,
    Akhtal,
  ),
  change(
    date(2020, 12, 28),
    <>
      Add fix for non-enemy targets hit by <SpellLink id={SPELLS.SCALDING_BREW.id} />.{' '}
    </>,
    Hordehobbs,
  ),
  change(
    date(2020, 12, 10),
    <>
      Added stats for <SpellLink id={SPELLS.SCALDING_BREW.id} /> and{' '}
      <SpellLink id={SPELLS.EVASIVE_STRIDE.id} />.
    </>,
    emallson,
  ),
  change(
    date(2020, 12, 15),
    <>
      Fix <SpellLink id={SPELLS.LIGHT_BREWING_TALENT.id} /> ID
    </>,
    Matardarix,
  ),
  change(
    date(2020, 11, 26),
    <>Replaced the deprecated StatisticBoxes from the modules with the new Statistic</>,
    LeoZhekov,
  ),
  change(
    date(2020, 10, 24),
    <>
      Added checklist item and timeline annotations for bad <SpellLink id={SPELLS.TIGER_PALM.id} />{' '}
      casts.
    </>,
    emallson,
  ),
  change(date(2020, 10, 18), 'Converted legacy listeners to new event filters', Zeboot),
  change(
    date(2020, 10, 17),
    'Added some missing abilities and updated ability cooldowns.',
    Dambroda,
  ),
  change(
    date(2020, 10, 16),
    <>
      Removed "Inefficient <SpellLink id={SPELLS.PURIFYING_BREW.id} /> Casts" statistic.
    </>,
    emallson,
  ),
  change(date(2020, 10, 12), 'Updated checklist to reflect the Shadowlands changes.', emallson),
  change(date(2020, 10, 6), <>Added Fallen Order statistic.</>, Abelito75),
  change(date(2020, 9, 5), <>Updated Brewmaster spells for Shadowlands.</>, emallson),
];
