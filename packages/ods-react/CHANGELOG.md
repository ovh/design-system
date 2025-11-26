# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.3.0](https://ovh.github.io/design-system/v19.3.0/?path=/docs/design-system-changelog--page) (2025-11-26)
[compare](https://github.com/ovh/design-system/compare/v19.2.1...v19.3.0)

### Bug Fixes

* **combobox:** ensure blur when moving to a different combobox ([a55b63d](https://github.com/ovh/design-system/commit/a55b63d3d63e6e9be91a416bef7786753ae724c8))
* **combobox:** reflect external value changes ([828199e](https://github.com/ovh/design-system/commit/828199e1ed6b43bf31e2047252fb484c2b548889))
* **datepicker:** manage null value when controlled ([fb42146](https://github.com/ovh/design-system/commit/fb42146a8805aa990020882713e606397afcb661))
* **doc:** reset theme for theme generator & isolate Table ([36fbdc8](https://github.com/ovh/design-system/commit/36fbdc8988434bf8e4f777d45fb05aa906d7d67e))
* **icon:** update e2e test to prevent random failure on CI ([e35e15c](https://github.com/ovh/design-system/commit/e35e15c903ef3057fa436b59635adb8f945876a6))
* **link:** prevent underline on hover when disabled ([53bbd41](https://github.com/ovh/design-system/commit/53bbd41558e633ab555f666841fce9dc496cd1be))
* **table:** remove min-width on mobile view ([cdf4d02](https://github.com/ovh/design-system/commit/cdf4d022739d967d37346c607625b9cbd999eb13))
* **tabs:** ensure role is applied on tab container ([9c5bcfc](https://github.com/ovh/design-system/commit/9c5bcfc2dcff87c8aea0d9be0d5c1e77e2bb3d62))
* **theme-generator:** update design tokens for a better use ([5440285](https://github.com/ovh/design-system/commit/54402851419979ef5bcab4978176cade86013854))


### Features

* **code:** add highlighter attribute ([663d6f1](https://github.com/ovh/design-system/commit/663d6f1166da6d16370dedd663e91836afa82e36))
* **divider:** deprecate color attribute & update doc with badge ([5ee000e](https://github.com/ovh/design-system/commit/5ee000e0f4170014f65cccd9c9d19db2fbe99697))
* **doc:** add css variables on component tech page ([82228ea](https://github.com/ovh/design-system/commit/82228ea53c80426ba53d905d2b34a3079c2de830))
* **storybook:** add dark mode ([67f66b5](https://github.com/ovh/design-system/commit/67f66b59af7504513eb97a0f54d44635d21a0783))
* **style:** update style to use design tokens ([661df0e](https://github.com/ovh/design-system/commit/661df0e6561be4d08bd68e62d9468c2cb9cbf580))
* **tabs:** fix lint ([096f084](https://github.com/ovh/design-system/commit/096f08452c31d409b1e7c45af0dc6610c8f667d5))
* **tabs:** uses manual scroll instead of scrollIntoView to handle horizontal scroll only ([43c93c3](https://github.com/ovh/design-system/commit/43c93c39c60f5cc8fba289a64a6254820d1c0f5c))
* **text:** add disabled attribute ([78b8b49](https://github.com/ovh/design-system/commit/78b8b495dbdb072522cd6b3ef62871664f0ad6b0))
* **text:** add support for "small" preset with styling and documentation ([fb18f58](https://github.com/ovh/design-system/commit/fb18f58e5d88a1f9888b2e188369d6864441220e))
* **toaster:** implement component ([5eabfb4](https://github.com/ovh/design-system/commit/5eabfb4eaacb7581a7b2901ce5b443e89c163d7a))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.1](https://ovh.github.io/design-system/v19.2.1/?path=/docs/design-system-changelog--page) (2025-10-15)
[compare](https://github.com/ovh/design-system/compare/v19.2.0...v19.2.1)

### Bug Fixes

* **button:** use correct border-radius for sm size ([e3809b0](https://github.com/ovh/design-system/commit/e3809b03d2d53eddb7b1763558b4748ceadeadf4))
* **tabs:** ensure container take the whole space with a visible border bottom ([8d7a1a5](https://github.com/ovh/design-system/commit/8d7a1a58d783a980a0dc884f730eab02600e50fc))


### Features

* **combobox:** add custom filter attribute ([ccd2d84](https://github.com/ovh/design-system/commit/ccd2d84273eae39417c21167dd1fef1a908180bb))
* **doc:** update FAQ with custom as component forwardRef ([ab0b4d3](https://github.com/ovh/design-system/commit/ab0b4d3d19a6339ebbca5ddc6189a624bbbe855d))
* **input:** add hover & focus state styling for border color ([f4af1ca](https://github.com/ovh/design-system/commit/f4af1cad9cf5266f3163f8c3c0b4560ba6c0f9db))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.0](https://ovh.github.io/design-system/v19.2.0/?path=/docs/design-system-changelog--page) (2025-10-09)
[compare](https://github.com/ovh/design-system/compare/v19.1.0...v19.2.0)

### Bug Fixes

* **build:** prevent declaration file not being generated ([b053f9a](https://github.com/ovh/design-system/commit/b053f9afb3a4793850fdc58d018bb93215b9cbf9))
* **combobox:** add missing a11y params && update documentation ([466fa9b](https://github.com/ovh/design-system/commit/466fa9b8cc9c969c3fc79c344a65e75dfd103707))
* **combobox:** init correctly group items with default value(s) ([6139b69](https://github.com/ovh/design-system/commit/6139b69129cfcec07481432649d65cecb05069ff))
* **combobox:** prevent clearable to reset input value ([1bd460f](https://github.com/ovh/design-system/commit/1bd460fc183c6de4a30662001cbf65f37055e49c))
* **combobox:** reset control to empty on blur if no selection ([1badc76](https://github.com/ovh/design-system/commit/1badc76abb43555f01124f3cc608b60eb960429b))
* **datepicker:** use custom input to manage value as expected ([f0f46a8](https://github.com/ovh/design-system/commit/f0f46a8f26b44746d88e6b0d836adcef7bc4e389))
* **icon:** fix inverted name ([ffcdb79](https://github.com/ovh/design-system/commit/ffcdb7919984b292bcef15f03967a055ce9c6165))
* **input:** enforce clearable display on initial render when a value is set ([705c1d3](https://github.com/ovh/design-system/commit/705c1d3607fe895dc239b1be226b0b1fa8745bcd))
* **input:** update hasValue based on value prop change ([f26cb2d](https://github.com/ovh/design-system/commit/f26cb2da1bf0146017978fb39878e3cb26003807))
* **quantity:** use correct id on subcomponent input ([6816333](https://github.com/ovh/design-system/commit/6816333f8062d6b26f9f55d4ecb03329d0b81d6a))
* **range:** prevent negative horizontal paddings ([62e7a2c](https://github.com/ovh/design-system/commit/62e7a2ca726f030540b742f9646d5b7f1286f6e7))
* **range:** update ticks position computation to match thumb size ([b3f237e](https://github.com/ovh/design-system/commit/b3f237eb98e83cce6769848b4642801bf14dd7c9))


### Features

* **combobox:** reset input value to selection on blur ([9f6c748](https://github.com/ovh/design-system/commit/9f6c748798bb9021764cc8900e8ee56e48400c81))
* **icon:** add new icons & aliases, fix bbox warning ([552ebe1](https://github.com/ovh/design-system/commit/552ebe15b0f8b395ffb305f9b88b96f62f056972))
* **meter:** implement component ([54fa446](https://github.com/ovh/design-system/commit/54fa446d7565fce078d6b788a1366c35d9365494))
* **packages:** bump to ark 5.25.1 ([bbe98cc](https://github.com/ovh/design-system/commit/bbe98cc5cc5e20322495c1e7e3fceccc5582ded1))
* **popover:** add autoFocus, sameWidth and triggerId attributes ([00ccfcf](https://github.com/ovh/design-system/commit/00ccfcf35bb7107cbb54fe8e4faba96a608d975c))
* **popover:** add gutter attribute ([40ec4a7](https://github.com/ovh/design-system/commit/40ec4a75184a363c320c6af3cbf9dbc603d09aaf))
* **popover:** add onPositionChange attribute ([b39f3e1](https://github.com/ovh/design-system/commit/b39f3e1381e661f86ff2926d19db733b4466eb3d))
* **range:** add custom ticks & correct rect size ([8aff937](https://github.com/ovh/design-system/commit/8aff9371d417647d169d7f6f06c650a479e3e35d))
* **tabs:** add arrows display option ([eb701e9](https://github.com/ovh/design-system/commit/eb701e9eec4237a2f4cae05250c46849f4576aa5))
* **tabs:** add transition on arrow gradients ([fa19246](https://github.com/ovh/design-system/commit/fa1924629761812ac21e2ef16037b2ba1d06b849))
* **tabs:** move withArrows to root context & add tab scroll on focus ([335470a](https://github.com/ovh/design-system/commit/335470a5676543a60d4faf88487863e5d4894edf))
* **tabs:** update scroll buttons state on resize ([9b6e4da](https://github.com/ovh/design-system/commit/9b6e4dae4421f3a3c73f5e3d142a5cf86cd53d17))
* **theme:** expose variable font file & normalizer ([10c56cf](https://github.com/ovh/design-system/commit/10c56cfa2da49e473dd78b967513ba7fbe7b7d26))
* **tree-view:** enhance structure, improve typings, and update styles and documentation ([c114f01](https://github.com/ovh/design-system/commit/c114f01d2302192af3a5df7c748a7a0959c2a91f))
* **tree-view:** implement component ([0953645](https://github.com/ovh/design-system/commit/09536458912880e3332b6f1066d54290f91edae3))
* **tree-view:** remove redundant name property and update related implementation and tests ([db3feeb](https://github.com/ovh/design-system/commit/db3feeb3519eaefda502a837e3cc342f03f920c5))
* **tree-view:** remove redundant name property and update related implementation and tests ([7e02f6b](https://github.com/ovh/design-system/commit/7e02f6b60051f42eee4a1545b2610e3b76b606d5))
* **tree-view:** update typings, enhance callback details, and simplify stories ([7c2d979](https://github.com/ovh/design-system/commit/7c2d97930d2c9b3e1dc25998352e0f0a93132339))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.1.0](https://ovh.github.io/design-system/v19.1.0/?path=/docs/design-system-changelog--page) (2025-08-08)
[compare](https://github.com/ovh/design-system/compare/v19.0.1...v19.1.0)

### Bug Fixes

* **a11y:** apply axe-core violation fixes ([38bc9a6](https://github.com/ovh/design-system/commit/38bc9a6acc3f5eef08ab9be4d0a3c76b6a35fb28))
* **breadcrumb:** adjust id generation and remove unnecessary dependency in effect ([299eb81](https://github.com/ovh/design-system/commit/299eb819a43cfcfe51d14506c34c542130773bbf))
* **breadcrumb:** update aria-controls prop for improved a11y in BreadcrumbEllipsis component ([ce29163](https://github.com/ovh/design-system/commit/ce291634cbf14ca8e6848402de5170393a2cde76))
* **checkbox:** ensure chekcbox size is actually 16px ([a8d040f](https://github.com/ovh/design-system/commit/a8d040f916a143fda7d1925780dab36517f9b42b))
* **checkbox:** move hidden input under control to avoid parent aria-hidden ([2b4e955](https://github.com/ovh/design-system/commit/2b4e955448815ecee31a279ba58eb24738ef74a9))
* **clipboard:** enforce default aria-label on trigger ([a5a2576](https://github.com/ovh/design-system/commit/a5a2576b6d90e008335b2ae48cb86deb52f65454))
* **combobox:** focus input on form field click ([cd83dab](https://github.com/ovh/design-system/commit/cd83dab2905cfc2d72d2b09e942408ecaf70c08d))
* **doc:** update message with container examples for roles ([37cb947](https://github.com/ovh/design-system/commit/37cb9476785ba618c70743bdba2215822381be0c))
* **file-upload:** fix the fileupload id behavior ([4f6502e](https://github.com/ovh/design-system/commit/4f6502ec7a9fc68e8b995ec9efd4abe61d61d4e6))
* **fileUpload:** prevent form field label to break trigger button ([392a55a](https://github.com/ovh/design-system/commit/392a55a7d74c3dcfb81111cd73c5a4ee5f3f7e2e))
* **i18n:** move i18n to root components & normalize contexts ([5bf41ab](https://github.com/ovh/design-system/commit/5bf41abad9bb0ac9909a01f74561f17cada84950))
* **input:** enforce default id & remove unused attr & filter demo doc ([5b62169](https://github.com/ovh/design-system/commit/5b62169865a5c0499022867236a7e73334cf5cf0))
* **ods-react:** revert to ark 5.12.0 ([d67786a](https://github.com/ovh/design-system/commit/d67786a46a3e34191f52d90069721938013664fa))
* **overlays:** prevent positionning issue if an id is set on popover/tooltip trigger ([6e51305](https://github.com/ovh/design-system/commit/6e51305476518571f5f0296dc1a0a53bc23e2cdf))
* **phone-number:** add missing country codes ([4847ded](https://github.com/ovh/design-system/commit/4847ded0e610e1f7d33a14b3742ea5fce96a8221))
* **progressBar:** enforce full width style ([ee46457](https://github.com/ovh/design-system/commit/ee46457b4a275306c593f6c6e0173be825e03e31))
* **radioGroup:** add aria-invalid on invalid radio ([2bd841c](https://github.com/ovh/design-system/commit/2bd841c9a21bb04427c2efc50578a6127d59f3f2))
* **select:** enforce aria-labelledby when in FormField context ([6fe2d1d](https://github.com/ovh/design-system/commit/6fe2d1d2fe4d8b570ef5aa653502748a1cd1c232))
* **toggle:** prevent labels to change the component height ([c5e091c](https://github.com/ovh/design-system/commit/c5e091c84518ca08bf2ed84757c148cf7cca1394))


### Features

* **a11y:** prevent ark auto-generated aria elements to be set by default when not used ([3e1a896](https://github.com/ovh/design-system/commit/3e1a896be656194f51cc87b2433bab3b3e385ab4))
* **breadcrumb:** add autoFocus prop for improved keyboard navigation ([bfb2c89](https://github.com/ovh/design-system/commit/bfb2c89276486798a45e6c9630c9b1c464b8996f))
* **breadcrumb:** improve component's accessibility & adding ellipsis label translation ([5e018aa](https://github.com/ovh/design-system/commit/5e018aab214a8a89bc92ad9ca671346725f01acc))
* **button:** improve button contrast for accessibility ([0dff7c0](https://github.com/ovh/design-system/commit/0dff7c00e096fd97b6060aaf9ad517a5d0afdabd))
* **checkbox:** add indeterminate a11y & controlled and uncontrolled indeterminate examples ([8851a87](https://github.com/ovh/design-system/commit/8851a87316088c4251b9badc3e17e6a83a2e4d24))
* **checkbox:** add vertical spacing on group ([e19ca34](https://github.com/ovh/design-system/commit/e19ca3448839901a31bc2b698ca43775581dbb9e))
* **code:** add role group if copy button is set ([d6ebcb6](https://github.com/ovh/design-system/commit/d6ebcb62eac36a4d7301adfb1199b4518e1ab576))
* **combobox:** add customRendererData generic prop to items ([6cac4b5](https://github.com/ovh/design-system/commit/6cac4b554d4c02eeaf63a88d01e6fa8ffa5501f2))
* **datepicker:** improve accessibility with aria attributes and documentation ([541e611](https://github.com/ovh/design-system/commit/541e611e6f4fc15d6b0076d8bf32721d0d4c8cc9))
* **doc:** add a11y switch documentation ([6808663](https://github.com/ovh/design-system/commit/6808663c2b141e6fc58ff1bc5b2d3673f4316659))
* **doc:** add accessibility info for message component ([027324d](https://github.com/ovh/design-system/commit/027324dc147035299af01bf3e3d33d44a5d915a0))
* **doc:** add caption example on medium doc page ([399d606](https://github.com/ovh/design-system/commit/399d606efe19bfd477fd25aca5c685bc3bf1329e))
* **doc:** add textarea acessibility information ([2d2bd88](https://github.com/ovh/design-system/commit/2d2bd8827acb7de6bdcc0347fcacad560de6ab3f))
* **fileUpload:** add i18n, locale props + a11y doc ([885b971](https://github.com/ovh/design-system/commit/885b971ab3166e5bda93f6acde7ecf5493a05bca))
* **i18n:** add i18n hook & apply on message ([027c342](https://github.com/ovh/design-system/commit/027c342660c7c7edc2ed8bfac8160b61c50824a7))
* **i18n:** allow partial object ([b11cebe](https://github.com/ovh/design-system/commit/b11cebef6bbbc6d45490e04bf63958510895d4b5))
* **input:** add InputActions component with support for loading, clear, search, and mask actions ([c7380ec](https://github.com/ovh/design-system/commit/c7380eccb8d849443de33e13b36e7031e493e720))
* **inputs:** add i18n prop to override Input accessibility translations ([9d71c4a](https://github.com/ovh/design-system/commit/9d71c4af451ef8dca805b6392f65517013b57228))
* **link:** enhance hover and focus styles with underline animation ([abb71f7](https://github.com/ovh/design-system/commit/abb71f77f58bcc1e0da74ddbb662568e8c495136))
* **link:** improve accessibility with new props and examples in documentation ([a7e9030](https://github.com/ovh/design-system/commit/a7e9030b786a56448d95ccfe2cf8335b1636321a))
* **modal:** add i18n, locale and initialFocusedElement props + a11y doc ([4f2e60b](https://github.com/ovh/design-system/commit/4f2e60b2670dabc9b36d4282729be0493a6b7261))
* **modal:** rework modal button class to follow BEM ([22398ed](https://github.com/ovh/design-system/commit/22398edd5c621251c238d313ff6f396684cbf675))
* **ods-react:** add data-ods attribute on exposed components ([ecb5905](https://github.com/ovh/design-system/commit/ecb5905e9ffe0081c627c595f000bc5f813de86b))
* **ods-react:** add react hook lint & fix issues ([d5b6676](https://github.com/ovh/design-system/commit/d5b667633198a98641959b206df60ef5bac38a7f))
* **ods-react:** bump ark to 5.17.0 ([caa17a5](https://github.com/ovh/design-system/commit/caa17a561e31cfdddebe942092be1bbb1a2d4c45))
* **ods-react:** bump ark to 5.18.1 ([ace9099](https://github.com/ovh/design-system/commit/ace909949178a735aa1a74d477fe93832d5113d0))
* **ods-react:** bump ark to 5.18.2 ([2c8e759](https://github.com/ovh/design-system/commit/2c8e759551585b203bfbfbc15ad0796d341df8c6))
* **pagination:** add a11y changes and documentation ([58bef9a](https://github.com/ovh/design-system/commit/58bef9a06bf8d3d8a2612eb1979e5fd3befaef1d))
* **pagination:** add labelled by text on select control ([b780660](https://github.com/ovh/design-system/commit/b7806602f56428c6e4234f53688637a0668818e9))
* **password:** add a11y changes and documentation ([c899eb8](https://github.com/ovh/design-system/commit/c899eb8aecfc44f289fed05c2f1bf650bfa686b0))
* **phoneNumber:** add a11y changes and documentation ([d3fe1a5](https://github.com/ovh/design-system/commit/d3fe1a5cba06b50094b737d9b4d8d4eb1bf1114f))
* **popover:** add className support and focus-visible styles to PopoverTrigger ([c705021](https://github.com/ovh/design-system/commit/c7050211d2784c8c1a7d86c636420b283d7361cc))
* **quantity:** add a11y changes and documentation ([04e0511](https://github.com/ovh/design-system/commit/04e05112421cf4f9ab22db283790a7e4ef874d7a))
* **range:** improve accessibility with roles, labels, and examples ([5b9b774](https://github.com/ovh/design-system/commit/5b9b77431644f4a7a266a26811853dddefd113b2))
* **select:** add a11y changes and documentation ([72c126c](https://github.com/ovh/design-system/commit/72c126cce3645d2cd02ad5da8831f47e6cd52d40))
* **select:** allow generic types for items custom data ([b47ece0](https://github.com/ovh/design-system/commit/b47ece01ac62a7a17b14e7f81ae6b2e3b55e5900))
* **skeleton:** improve accessibility & add examples in documentation ([5ad2904](https://github.com/ovh/design-system/commit/5ad29044eeb363306dc6f17aadf77279562acc76))
* **skeleton:** move aria-hidden before props spread for better override flexibility ([726f0a9](https://github.com/ovh/design-system/commit/726f0a97b83f3fafd4fe26f21a0f4cecfa90e8d8))
* **timepicker:** add a11y changes and documentation ([88f0561](https://github.com/ovh/design-system/commit/88f0561ffb6e8a72329be67a55db5e563790dec7))
* **toggle:** add ToggleControl and ToggleLabel ([9e37120](https://github.com/ovh/design-system/commit/9e37120f73aa071b966e6ee657f1f3a2ca5247ae))
* **toggle:** improve accessibility & add examples in documentation ([8a0c708](https://github.com/ovh/design-system/commit/8a0c7089ff796f5e035c2c73e1e856d17f99e251))
* **tokens:** add a class to the modal button ([c9d3336](https://github.com/ovh/design-system/commit/c9d33362e669fc7d74ea4b64d2369e0f8c1e22ab))
* **tokens:** add new design tokens and update message bg-color for better contrast ([ae6360d](https://github.com/ovh/design-system/commit/ae6360d38c2c5b0dbc64cc9ba7586814370913e7))
* **tokens:** update primary close button color & modal bg-color ([89fcf8d](https://github.com/ovh/design-system/commit/89fcf8d1306e3d6d7c25207802973e6c2baedccf))
* **tooltip:** enhance accessibility documentation and add related examples ([83b1d65](https://github.com/ovh/design-system/commit/83b1d657c97cdb06c8820151e3eadc6dff6fe8bc))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.1](https://ovh.github.io/design-system/v19.0.1/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v19.0.0...v19.0.1)

### Features

* **pagination:** add handler on page size change ([6905a0f](https://github.com/ovh/design-system/commit/6905a0f322c70798765b42737e9cdfee13871a07))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.0](https://ovh.github.io/design-system/v19.0.0/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v18.6.3...v19.0.0)

### Bug Fixes

* **breadcrumb:** enforce ellipsis button type to be button ([29cc11e](https://github.com/ovh/design-system/commit/29cc11ef9720bc09c97403f520a2517a52362cb9))
* **breadcrumb:** prevent line height change on expand ([e96a26d](https://github.com/ovh/design-system/commit/e96a26db08358a8c0813ad10d69de5db98506349))
* **build:** update config to fix tree-shaking for webpack ([5015486](https://github.com/ovh/design-system/commit/5015486e7b25e62be9d0e0ef9ca2b6d99443e5e3))
* **card:** expose constants & update doc ([d57c778](https://github.com/ovh/design-system/commit/d57c7788312c8b53f77966909b80118142cb04f8))
* **checkbox:** align icon correctly & remove problematic control from doc ([742fa94](https://github.com/ovh/design-system/commit/742fa94b2c6f75412edf4edfa06adf19d419f3a0))
* **combobox:** enforce input height ([92e38bd](https://github.com/ovh/design-system/commit/92e38bdb8887b8801d04bc23637c1a45c327b28c))
* **combobox:** force combobox clear on input clear ([a80a0a1](https://github.com/ovh/design-system/commit/a80a0a1fe1ad8351bbbe07882ccc186138b91eea))
* **combobox:** prevent current value to be filterer when deleted on input ([15d50eb](https://github.com/ovh/design-system/commit/15d50eb2d2c2366e22b3a9b8099519de41cda0fe))
* **input:** enforce loading width to match action button ([9be296f](https://github.com/ovh/design-system/commit/9be296fc4cb36b5c734c01708dcc57905f44b13a))
* **input:** focus input on clear ([2240723](https://github.com/ovh/design-system/commit/22407231513c9f3dfe9c04ce1aa071c99c2619a8))
* **input:** prevent displaying actions on controlled input when spamming value ([1878e1e](https://github.com/ovh/design-system/commit/1878e1e60e0d38c78d5c2d683917f8259124e489))
* **input:** use correct action color & update doc ([db2ed86](https://github.com/ovh/design-system/commit/db2ed860e48b418b9cef8d678c302b0c93f6f5ad))
* **lib:** update build to work with React v19 & add vite example app ([0e29ef7](https://github.com/ovh/design-system/commit/0e29ef7c0e23ebabc9e4967f6509dc123330844e))
* **link:** allow custom onClick function ([fd9d498](https://github.com/ovh/design-system/commit/fd9d49879a8733c7e495583884c384e32b777374))
* **link:** enforce baseline on empty text ([0f40e17](https://github.com/ovh/design-system/commit/0f40e173b53cd02aa64692347839a50227e6af57))
* **link:** enforce disabled style to prevail primary color ([4e13d2e](https://github.com/ovh/design-system/commit/4e13d2ee8225a21499bfb97a0ddcfcd5d2dc8bab))
* **overlays:** add missing className prop ([0489ca0](https://github.com/ovh/design-system/commit/0489ca0903954927fc30ca28c0bf55d3e38924be))
* **phone-number:** display country names correcty on webkit browsers ([2b22e15](https://github.com/ovh/design-system/commit/2b22e1583fdd823ee05bddc2f9b0cda144c2833c))
* **phone-number:** manage validation on country change ([af80035](https://github.com/ovh/design-system/commit/af80035c7464601226a649df9e6363bc85f752fc))
* **phone-number:** put back correct style when removing country list ([6661eb2](https://github.com/ovh/design-system/commit/6661eb217da1db269374c1a157a5268c381333fe))
* **quantity:** apply missing input state styles ([bea2856](https://github.com/ovh/design-system/commit/bea28562ebbdce83fee977daaff9d9cb261d06da))
* **radio:** set correct size ([d95a5a2](https://github.com/ovh/design-system/commit/d95a5a22265d325c059c8527b70f2efbabe279b0))
* **range:** change thumb color on disable state ([f86c886](https://github.com/ovh/design-system/commit/f86c886b77372721ca81e7a60c07aae7f73938f4))
* **range:** focus thumb on track click ([c03e36b](https://github.com/ovh/design-system/commit/c03e36b2922c935eb91dc140df991648434202aa))
* **select:** add missing name & hidden field && add to example app ([706065a](https://github.com/ovh/design-system/commit/706065a08ca93c51ee19493f2630b5e95382ec12))
* **select:** add missing onValueChange & value props ([e7f7788](https://github.com/ovh/design-system/commit/e7f7788627385605cc8c809a3cbc06e9abb69573))
* **select:** change cursor on readonly state ([be3e5f5](https://github.com/ovh/design-system/commit/be3e5f55e1fa409bd65c122f056e0b434af8b2a6))
* **style:** remove useless grid prefix on gap properties ([b3212f6](https://github.com/ovh/design-system/commit/b3212f6cc2893921ba3922f3904ae3d6e32c368f))
* **table:** add missing exports & update doc ([e6bb0e0](https://github.com/ovh/design-system/commit/e6bb0e082fcb6035190239a4509a87256d8a39ea))
* **tag:** enforce button type to be button ([d0cc8fd](https://github.com/ovh/design-system/commit/d0cc8fdac098d6f6a214a3c531b567c4d61173ce))
* **tag:** font-family in mixin and improve documentation ([31ee17a](https://github.com/ovh/design-system/commit/31ee17a83fd10f98ccc9d27398a9ba8dd1dea277))
* **textarea:** apply missing input state styles ([5eed09d](https://github.com/ovh/design-system/commit/5eed09df4695f4c477af0f0712a66f2cb0ced9de))


### Features

* **accordion:** clean implementation ([5d4fe22](https://github.com/ovh/design-system/commit/5d4fe22d57efd887ffe7ac455fdedb86ace4b61d))
* **accordion:** enhance multiple behavior and remove unused doc example ([a2d825e](https://github.com/ovh/design-system/commit/a2d825e53f429ba7505c82f9cae32c9eeb91d65e))
* **accordion:** implement component ([54e54f1](https://github.com/ovh/design-system/commit/54e54f1ad31f43ff0c3061316945ef49d32de99d))
* **accordion:** props order ([3868064](https://github.com/ovh/design-system/commit/3868064e53940cfe83368e3d080df535e5e4da49))
* **breadcrumb:** implement component ([b0035a2](https://github.com/ovh/design-system/commit/b0035a2a65a9a9d35c7a96eabfa695d7187475b5))
* **button:** set type as button by default ([09f269f](https://github.com/ovh/design-system/commit/09f269ffec5c80f2f5fd00d69c1146cc3a97ae59))
* **card:** adds card component to react ([4eba34a](https://github.com/ovh/design-system/commit/4eba34a9cd29f5f5230c08ea086e7ba55beb46e5))
* **card:** removed unused code & improve doc ([9bfba0a](https://github.com/ovh/design-system/commit/9bfba0a1c6a6c2e1e749c5fb360575f6a867cf09))
* **checkbox:** add checkbox group ([54f8013](https://github.com/ovh/design-system/commit/54f80137378b76807ccf64cfac5dae6022a17814))
* **checkbox:** apply cursor style on label ([f199805](https://github.com/ovh/design-system/commit/f199805697d729a81da22eb319b37da26388ea94))
* **checkbox:** implement component ([35246d7](https://github.com/ovh/design-system/commit/35246d7dea4772a866d10cd1dbff4109a21440dd))
* **clipboard:** implement component ([9c8d167](https://github.com/ovh/design-system/commit/9c8d167bc3bd2d59fd88ee3f1adf7043a3afe6ac))
* **clipboard:** refactor component to use composition ([f6d4e9b](https://github.com/ovh/design-system/commit/f6d4e9b9b86b1d6705a48289244006ffe4fe3f1d))
* **clipboard:** update prop handling and tooltip styling ([2b6c943](https://github.com/ovh/design-system/commit/2b6c943761608b884eef5c12e172f7309f63996a))
* **clipboard:** update storybook controls and cleanup clipboard imports ([71978c6](https://github.com/ovh/design-system/commit/71978c6c44d25071dabebc75b2582e610a70c992))
* **code:** implement component ([7956170](https://github.com/ovh/design-system/commit/7956170992fee245f9e2d58ffe9e21244930a3f1))
* **code:** optimize optional clipboard render & add custom style story ([b92d234](https://github.com/ovh/design-system/commit/b92d234e75bb14a956b2be4c2618e4c9c89f00af))
* **combobox:** add styles for disabled and read-only states ([a8d6859](https://github.com/ovh/design-system/commit/a8d6859f1fb4a89963cf3d3bbabd773337cc4a2b))
* **combobox:** add support for invalid state and improve control styling ([d865629](https://github.com/ovh/design-system/commit/d8656292b11e6738f127fa9f484e6d16eaf04e0d))
* **combobox:** implement component ([d6c94cf](https://github.com/ovh/design-system/commit/d6c94cfb8456e158f8f37d5df0d9abde57ec2d06))
* **combobox:** implement multiple ([bcb72b3](https://github.com/ovh/design-system/commit/bcb72b360532b7cefa7253aab4d80cac266e4240))
* **components:** add specific css layer to isolate ods style ([0e84600](https://github.com/ovh/design-system/commit/0e84600f3b546a93b1c94678a4644db0671cdbed))
* **components:** bump [@ark-ui](https://github.com/ark-ui) to 5.9.0 ([2bc36c9](https://github.com/ovh/design-system/commit/2bc36c93444a987ee6606779a10b853afaa96cd7))
* **components:** separate css layers given atomic level ([1d9a8c5](https://github.com/ovh/design-system/commit/1d9a8c5d11b9a4116a166fe3249142669db08a62))
* **datepicker:** implement component ([c6297d1](https://github.com/ovh/design-system/commit/c6297d12deb426d14582cc8224fad06b452fd1bc))
* **datepicker:** use separated trigger to open content ([3f0a1b4](https://github.com/ovh/design-system/commit/3f0a1b4eab029c710682115fd4b945695b414fb8))
* **divider:** add OdsDivider component with styles and tests ([357ee5a](https://github.com/ovh/design-system/commit/357ee5a003113a4c44aac7e38f4add2db9fb0e4b))
* **divider:** improve documentation ([290548a](https://github.com/ovh/design-system/commit/290548a41cbbafb6b2e670003014e7abe1e6e3da))
* **doc:** add description on each exposed component property ([03c30bb](https://github.com/ovh/design-system/commit/03c30bb9e9a8ad28d56f2079419b76d066da7c92))
* **doc:** bump storybook to 8.6.12 ([6449ec7](https://github.com/ovh/design-system/commit/6449ec7559f7e33486db6a10eb8a64b89efeed65))
* **doc:** handle custom tag on typedeoc generated files + improve long enum render ([24f2179](https://github.com/ovh/design-system/commit/24f2179a96579361a48479e2e21e3d41442a7e32))
* **doc:** improve component enums/interfaces/unions generation ([9ea4919](https://github.com/ovh/design-system/commit/9ea49199e9076fa11b79a39bb692c26ec2a49e8f))
* **doc:** improve component props generation && fix few components interfaces ([e3493e2](https://github.com/ovh/design-system/commit/e3493e23a50fb4cac3d14f0cf4218d7f72f783b1))
* **doc:** improve datepicker Demo ([6eb0f06](https://github.com/ovh/design-system/commit/6eb0f062ff04351f88d40c08b49249c97e2d120d))
* **drawer:** enable pointer interaction outside the element ([332e400](https://github.com/ovh/design-system/commit/332e4009a0ba190317427a0a289b1b526df05d97))
* **drawer:** implement component ([f207ea3](https://github.com/ovh/design-system/commit/f207ea3d84b642b72fe0ce848569f98e98a425e9))
* **drawer:** update class naming convention and typing adjustments ([31e4d12](https://github.com/ovh/design-system/commit/31e4d121f2d1a0c7ad7f85c7f8096bc1d7f96211))
* **drawer:** update styles and improve component structure ([d011946](https://github.com/ovh/design-system/commit/d01194653cdeca599be277a6622e0ee76344b647))
* **file-upload:** implement component ([a235e9d](https://github.com/ovh/design-system/commit/a235e9de7a3d1822980b58aa8dea18157cba20f5))
* **icon:** add updated icons with correct ratio ([9b417d4](https://github.com/ovh/design-system/commit/9b417d47a42da53db079692d73a30883a9ab5568))
* **input:** expose mask state enum ([5db98f4](https://github.com/ovh/design-system/commit/5db98f4ef2947a428a2bb47625d80aee51cabcbd))
* **input:** implement component ([5a8b47c](https://github.com/ovh/design-system/commit/5a8b47c25fcecae8fa8d692fa02f962924bc2c3f))
* **input|textarea:** add invalid prop to enforce error style ([cc32703](https://github.com/ovh/design-system/commit/cc32703f68e4a2b103af998059fd1abdbef8e55e))
* **medium:** implement component ([f9c805a](https://github.com/ovh/design-system/commit/f9c805a34c3558fdb18372418a21d2799f5e0797))
* **message:** implement component ([564f6a1](https://github.com/ovh/design-system/commit/564f6a177d2d97c62563f9cb7819ad7718f0f3a3))
* **modal:** implement component ([1fac5db](https://github.com/ovh/design-system/commit/1fac5dbef371ced79895d924311856f80b7af59f))
* **ods-react:** bump to ark 5.12.0 ([34f962a](https://github.com/ovh/design-system/commit/34f962af4ac0212467bee5500900f398f4b127cd))
* **overlays:** add createPortal prop to components using Portal ([858f5af](https://github.com/ovh/design-system/commit/858f5afdba875b2fcc1226a9dc46d2eca13a14dc))
* **overlays:** allow prop extend on non DOM elements ([912f320](https://github.com/ovh/design-system/commit/912f320393cf90d2510f84ff1f0703c89532d4d0))
* **pagination:** add page size selector and enhance total items rendering ([cd65701](https://github.com/ovh/design-system/commit/cd6570125bb72a1514b5c8bd4204f5612abee7e0))
* **pagination:** add props and refactor components structure ([781544e](https://github.com/ovh/design-system/commit/781544ea13920fc90eaa6f56b42761894206e95f))
* **pagination:** add totalItemsLabel with custom render ([7444a9b](https://github.com/ovh/design-system/commit/7444a9b0a04080902e1164ef7827b3afd82219c7))
* **pagination:** implement component ([d7c5747](https://github.com/ovh/design-system/commit/d7c5747a6fc4627fbea945c21eb6a8f205cefb65))
* **pagination:** refactor components for modularity and add custom style support ([041128f](https://github.com/ovh/design-system/commit/041128f13203853fb8688edd7071860e88f89bb9))
* **pagination:** remove unused exports ([36e18b8](https://github.com/ovh/design-system/commit/36e18b83d9253a3b9c773dac93ac12ca535dafcd))
* **password:** implement component ([ee13e1a](https://github.com/ovh/design-system/commit/ee13e1a4b67b544b8ede471825639da55053f9f0))
* **phone-number:** implement component ([85fec75](https://github.com/ovh/design-system/commit/85fec759e58c8fc8f4898bc66c87f48a4a88dc9f))
* **popover:** add onOpenChange prop ([63b8823](https://github.com/ovh/design-system/commit/63b8823f73a207d746f702d77c62cc7183d5e835))
* **progressBar:** implement component ([0ad1826](https://github.com/ovh/design-system/commit/0ad1826a89680728184bdb703aef26377914c826))
* **quantity:** implement component ([65922c3](https://github.com/ovh/design-system/commit/65922c30f017be880c5cb6eedf3695ec69bb2bf1))
* **radio:** apply cursor style on label ([a45f01f](https://github.com/ovh/design-system/commit/a45f01f96a9252ad9efdd2658d2e12ac45882fd8))
* **radio:** implement component ([2986ce3](https://github.com/ovh/design-system/commit/2986ce3f7094481b002f38bacb671bcc1e6ba155))
* **range:** implement component ([d2e87e5](https://github.com/ovh/design-system/commit/d2e87e53db126dd7435f162492173c1b97162f20))
* **range:** set disabled style to bounds ([cc59d64](https://github.com/ovh/design-system/commit/cc59d640e6f112cc40fd685274955bde6c248338))
* **select:** add fitControlWidth prop ([cb15d2a](https://github.com/ovh/design-system/commit/cb15d2a7eac1ba66b83cb01b3e4f1ee1ad115089))
* **select:** implement component ([277dc35](https://github.com/ovh/design-system/commit/277dc354104e635f01204cd4a91246ccddfba5ff))
* **skeleton:** initiate skeleton component ([57b5bf8](https://github.com/ovh/design-system/commit/57b5bf8cf0993e1457b45dfe3d5967c3bbd09819))
* **styles:** add background color for invalid states across form elements ([dd973e5](https://github.com/ovh/design-system/commit/dd973e53cb7df2b73cdd34a8893baae815334c82))
* **switch:** implement component ([5f8352b](https://github.com/ovh/design-system/commit/5f8352b89a64426826ef187a0b78c45c222f6f9f))
* **switch:** remove invalid prop as it's not a form element anymore ([1b48e25](https://github.com/ovh/design-system/commit/1b48e25e81cb210890149e71bc62aa8c97d80738))
* **table:** add OdsTable component and related files ([2831a00](https://github.com/ovh/design-system/commit/2831a003cb392c90be0989667e313dd42e1deebf))
* **table:** simplifies code by removing excess table ([22f2815](https://github.com/ovh/design-system/commit/22f28157d7fa252c480a4b49d8fd88ab96957a59))
* **tabs:** add controlled behavior ([af6ab39](https://github.com/ovh/design-system/commit/af6ab39f6d5e37f4d3fd1d5f2493ba57eadb8ce2))
* **tabs:** implement component ([6172e2b](https://github.com/ovh/design-system/commit/6172e2b7edd163ecccf81002edbdb12a16d9c1e6))
* **tabs:** improve accessibility & documentation ([a85042a](https://github.com/ovh/design-system/commit/a85042ab8d550e950df101c82ad6c28d518bee47))
* **tabs:** improve documentation ([fd5ba2f](https://github.com/ovh/design-system/commit/fd5ba2f69b370f077cbe6415ab7dc608a8e03679))
* **tabs:** improve exports ([816c25c](https://github.com/ovh/design-system/commit/816c25cb4e414919c7b9ed5040894cd9b3f42f14))
* **tag:** adds tag component with tests and doc ([5ad1e4b](https://github.com/ovh/design-system/commit/5ad1e4b386e13df22282d6940c7a64386d716da7))
* **tag:** replaced the native div with a native button ([f3acc0b](https://github.com/ovh/design-system/commit/f3acc0b763ebcd27a2770e81bb4e9297524c06b3))
* **text:** add label preset ([4e986f9](https://github.com/ovh/design-system/commit/4e986f924424c288136e74e14d92a64f27a7bb5d))
* **text:** fix typing to allow label specific attribute ([20d65a9](https://github.com/ovh/design-system/commit/20d65a9962109d69b61b4745ada4914276f059a7))
* **themes:** add new selected design tokens ([5636b14](https://github.com/ovh/design-system/commit/5636b14361f1a0802e6b06c436b00e64d116ed5a))
* **themes:** enforce ods layers order ([0337d3e](https://github.com/ovh/design-system/commit/0337d3e519aebb014eaee220c22b59b66d9a886e))
* **timepicker:** implement component ([7687b4f](https://github.com/ovh/design-system/commit/7687b4feb8a7d3be3e28e7202974cf43606da5f4))
* **toggle:** implement component ([a07a8b8](https://github.com/ovh/design-system/commit/a07a8b8f19e81c6e70776f5706b2e74cd77b32f4))
* **toggle:** improve BEM structure ([7050dc4](https://github.com/ovh/design-system/commit/7050dc462aa16e38a41bdefd49b9483a8f72dbd7))
* **toggle:** improve scss naming ([a70bd6d](https://github.com/ovh/design-system/commit/a70bd6d7440219980a8ad0627d803fa9176be963))
* **toggle:** move labels into a new sub-component ([b979711](https://github.com/ovh/design-system/commit/b9797114a261da637f93734783fee25460fd0b54))
* **toggle:** scss & docs optimization ([d3fe7a1](https://github.com/ovh/design-system/commit/d3fe7a1f0bfab3f02976fcfcc43c5c8b2e259802))
* **tooltip:** add onOpenChange prop ([9935689](https://github.com/ovh/design-system/commit/9935689c8a0f279cabe59223d6cbebd480fd7008))
* **tooltip:** improve tooltip behavior when clicking on trigger ([49bbd5c](https://github.com/ovh/design-system/commit/49bbd5c75f8ca7f3c04a0ed72e46fbcaf79bc50d))
