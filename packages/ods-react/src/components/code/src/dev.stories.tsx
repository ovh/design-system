import { Code } from '.';
import style from './dev.module.css'
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';

export default {
  component: Code,
  title: 'Code dev',
};

export const CanCopy = () => (
  <Code canCopy>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const CustomStyle = () => (
  <Code canCopy className={ style['custom-code'] }>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const Default = () => (
  <Code>
    {`import { Text } from '@ovhcloud/ods-react';`}
  </Code>
);

export const Highlight = () => (
  <>
    <Code
      highlighter={{
        language: lang,
        theme: theme,
      }}>
      {`import { Text } from '@ovhcloud/ods-react';`}
    </Code>

    <br /><br />

    <Code
      canCopy
      highlighter={{
        language: lang,
        theme: theme,
      }}>
      {`import { Text } from '@ovhcloud/ods-react';`}
    </Code>
  </>
);

export const StickyCopy = () => (
  <Code canCopy>
    {`$a: #ff6600;
$b: #eb5e00;

// Ever wanted to know what would be the color operations to apply to a color
// in order to find a second color, just out of curiosity?
// Like, "how to programmatically go from #BADA55 to #B0BCA7"?
// --------------------------------------------------------------------------------
// @param (color) $a: first color
// @param (color) $b: second color
// --------------------------------------------------------------------------------
// @return (map) returns the color operations to do in order to find $b from $a
//   where keys are the color functions to apply
//   and values are the values to pass to these functions

@function color-diff($a, $b) {
  $sat: saturation($a) - saturation($b);
  $lig:  lightness($a) -  lightness($b);
  $fn-sat: if($sat > 0, 'desaturate', 'saturate');
  $fn-lig: if($lig > 0, 'darken', 'lighten');

  @return (
    adjust-hue: -(hue($a) - hue($b)),
    #{$fn-sat}: abs($sat),
    #{$fn-lig}: abs($lig)
  );
}

// Apply differences returned from \`color-diff\` function to a color
// In order to retrieve the second color
// --------------------------------------------------------------------------------
// @param (color) $color: color to transform
// @param (map) $diff: diff map
// --------------------------------------------------------------------------------
// @return (color) transformed color

@function apply-diff($color, $diff) {
  // We call the $key (function),
  // passing the $color and the $value as parameters
  // e.g. \`call(adjust-hue, #BADA55, 42)\`
  @each $key, $value in $diff {
    $color: call($key, $color, $value);
  }
  @return $color;
}

// Calculate the diff map between those 2
$diff: color-diff($a, $b);
@debug($diff);

// Apply the diff to one of the two colors to find the second one
$c: apply-diff($a, $diff);

// Is everything okay?
sass {
  a: $a;
  b: $b;
  c: $c; // $b == $c, awesome!
}
`}
  </Code>
);
