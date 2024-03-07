import React, { useEffect, useState } from 'react';
import { ODS_SPINNER_SIZE, ODS_TEXT_PRESET } from '@ovhcloud/ods-components';
import { OdsSpinner, OdsText } from '@ovhcloud/ods-components/react';
import { ODS_THEME } from '@ovhcloud/ods-themes';
import { OText } from './OText';
import styles from './app.scss';

const App = () => {
  const [theme, setTheme] = useState<string>()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme || '')
  }, [theme])

  function onBasicThemeClick() {
    setTheme('basic')
  }

  function onDarkThemeClick() {
    setTheme(ODS_THEME.dark)
  }

  function onNoThemeClick() {
    setTheme('')
  }

  return (
    <div>
      <h1 className={ styles['app__title'] }>
        Headline with ODS mixin
      </h1>

      <OdsText preset={ ODS_TEXT_PRESET.headline }
               onFocusEvent={ (e) => console.log(e) }>
        ODS Text Headline
      </OdsText>

      <OText preset={ ODS_TEXT_PRESET.headline } />

      <OdsSpinner size={ ODS_SPINNER_SIZE.sm } />
      <OdsSpinner />
      <OdsSpinner size="lg" />
      <OdsSpinner class={ styles['app__spinner'] } />

      <br />

      <div>
        <button onClick={ onBasicThemeClick }>
          Theme basic
        </button>

        <button onClick={ onDarkThemeClick }>
          Theme dark
        </button>

        <button onClick={ onNoThemeClick }>
          No theme
        </button>
      </div>
    </div>
  )
  // const formRef = useRef(null);
  // const textRef = useRef<TextType>(null);
  //
  // function onSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   if (formRef.current) {
  //     const formData = new FormData(formRef.current);
  //     console.log(formData)
  //   }
  // }
  //
  // function onReset() {
  //   console.log(textRef.current?.formatText())
  //   console.log('form reset')
  // }
  //
  // return (
  //   <form ref={ formRef }
  //         onReset={ onReset }
  //         onSubmit={ onSubmit }>
  //     <OdsText ref={ textRef }
  //              text="Welcome" />
  //
  //     <OdsInput name="input"
  //                // onOdsInputBlur={() => console.log('blur input')}
  //                // onOdsInputFocus={() => console.log('focus input')}
  //                // onOdsValueChange={() => console.log('value change input')}
  //                // placeholder="Type your some text"
  //                // required
  //                // size={ ODS_INPUT_SIZE.md }
  //                // type={ ODS_INPUT_TYPE.text }
  //                // value=""
  //     />
  //
  //     <input name="hidden-input"
  //            type="hidden"
  //            value="should be present in form data" />
  //
  //     <button type="reset">
  //       Reset
  //     </button>
  //
  //     <button type="submit">
  //       Submit
  //     </button>
  //   </form>
  // );
};

export { App };
