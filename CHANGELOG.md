# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [18.3.1](https://ovh.github.io/design-system/v18.3.1/?path=/docs/design-system-changelog--page) (2024-11-21)
[compare](https://github.com/ovh/design-system/compare/v18.3.0...v18.3.1)

### Bug Fixes

* **breadcrumb:** fix separator size as expected in figma ([72cf7f3](https://github.com/ovh/design-system/commit/72cf7f3682a4295502ed5ce4721304fbc160dbd5))
* **modal:** prevent wrong dialog height on safari ([150df6e](https://github.com/ovh/design-system/commit/150df6e2037daeb97b1e77740fffb6e03d7f2f8b))
* **select:** apply style to hovered selected option & expose missing tokens ([5bb0165](https://github.com/ovh/design-system/commit/5bb016541c6eb14e547c3c473c2ba7224c54f231))
* **switch:** use separate command to run e2e tests on CI ([ebf3962](https://github.com/ovh/design-system/commit/ebf396281ad9f6e3a82ac8173a4f7d2a81802008))


### Features

* **button:** use filter icon in icon only example ([acb12a1](https://github.com/ovh/design-system/commit/acb12a168c192a6616c6253640cea54f66223098))
* **icon:** add new icon 'columns' ([4da03d6](https://github.com/ovh/design-system/commit/4da03d6fc01d0517523b20b83fbd269c448d0a19))
* **link:** update hover, focus & visited colors ([7674557](https://github.com/ovh/design-system/commit/7674557b8da31872c414bf1f89326f1a51f9ac0c))
* **text:** add caption preset examples for table & figcaption ([11e1038](https://github.com/ovh/design-system/commit/11e10387e698a7fc3a18880ace1d3dce6638dba3))
* **text:** add id to apply css style in stories ([b7465fa](https://github.com/ovh/design-system/commit/b7465fa4c6b857df2e7a90607f7834f990613e75))
* **text:** change preset caption tag to span ([b993eb0](https://github.com/ovh/design-system/commit/b993eb04a8fc9431c70dab18f7cf27db032d16e2))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [18.3.0](https://ovh.github.io/design-system/v18.3.0/?path=/docs/design-system-changelog--page) (2024-11-05)
[compare](https://github.com/ovh/design-system/compare/v18.2.0...v18.3.0)

### Bug Fixes

* **badge:** use expected border-radius token for badge ([bf68c9c](https://github.com/ovh/design-system/commit/bf68c9ce8902ad7f218ae89bde1ce14717ee1cfc))
* **breadcrumb:** reset is-last attribute on new items setup ([b86f8f2](https://github.com/ovh/design-system/commit/b86f8f2cd95ec24bc6be70229508c8b756528bc0))
* **input:** clean-up datalist on slot change ([51dea32](https://github.com/ovh/design-system/commit/51dea32bed5cfab9ef2981499e77b7561e0f7415))
* **input:** on enter submit form ([3e65773](https://github.com/ovh/design-system/commit/3e65773b2c712d432f67d5a5cbad19d0627a6779))
* **modal:** do not emit close event on unmount ([5ba3acb](https://github.com/ovh/design-system/commit/5ba3acb98829858581224291c079bbf80d7fe5ae))
* **modal:** wrap content slot to prevent flex style application ([dff96da](https://github.com/ovh/design-system/commit/dff96da782062c82643ca2c8658f71e75871fe33))
* **select:** customeRenderer update remove options ([dc771bf](https://github.com/ovh/design-system/commit/dc771bf141f3ccd3d1a3fd4e4d7ba66ce23d1305))
* **select:** disabled on load select ([34fa0a4](https://github.com/ovh/design-system/commit/34fa0a4a0532d405178acc6f746b507657b7a216))
* **select:** slot change options ([f523900](https://github.com/ovh/design-system/commit/f523900da93e9e23231bad80fc1f21f8604c7d1f))
* **select:** test ([53b7a84](https://github.com/ovh/design-system/commit/53b7a84c38d64329b077adbed4f1e5def7f8f741))


### Features

* **breadcrumb:** add part on last item ([18d452f](https://github.com/ovh/design-system/commit/18d452f61403978e5ac2e1f02b54b4c954742b6e))
* **global:** add read-only tokens & apply style to components ([df51f02](https://github.com/ovh/design-system/commit/df51f025c0bac0c7ef718f42a76488150bbce82e))
* **global:** apply ods-button to clipboard, input type components, message & modal ([04f9376](https://github.com/ovh/design-system/commit/04f93762515c9a3b435467244cc530f00869473b))
* **global:** apply readonly color to icons & add control to select ([ef54fc2](https://github.com/ovh/design-system/commit/ef54fc22e8655f065289b2c08328d04fd9643996))
* **global:** re-add cursor pointer in select ([a9006ba](https://github.com/ovh/design-system/commit/a9006ba14942298f4d066e7ee1ea469a4debb6a6))
* **global:** rm datepicker clearable sass var & keep spaces in attr. values ([af5a823](https://github.com/ovh/design-system/commit/af5a823b75f1f5c19c2788ab5a9c051e9a425a90))
* **input:** add native datalist feature ([c24f710](https://github.com/ovh/design-system/commit/c24f7104c29fd112f26a96977c72ac6d836d6537))
* **message:** add dismissible class to manage grid columns ([9a2be2e](https://github.com/ovh/design-system/commit/9a2be2eaa9362e2406bfec4c666dc7716174b20e))
* **message:** add is-dismissible related tests & fix gap issue ([a5156f3](https://github.com/ovh/design-system/commit/a5156f3975939da263a2277c68308157198558e3))
* **message:** add non-dismissible Message ([40c68ff](https://github.com/ovh/design-system/commit/40c68ffc07ef64ab422c65b224c087c0166d52e1))
* **modal:** custom height ton part dialog ([bb4e518](https://github.com/ovh/design-system/commit/bb4e5189c8fd37dcb8e61a293797df88596d2d14))
* **overlay:** add strategy prop to handle fixed context ([a07df4d](https://github.com/ovh/design-system/commit/a07df4d3a7f64e7c50f0c1e10c0898735e86feb4))
* **range:** apply same style to hovered thumb for default & error ([0e21361](https://github.com/ovh/design-system/commit/0e213619222af6e2f9e75e4ba137e7d0dba1a14d))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [18.2.0](https://ovh.github.io/design-system/v18.2.0/?path=/docs/design-system-changelog--page) (2024-10-23)
[compare](https://github.com/ovh/design-system/compare/v18.1.0...v18.2.0)

### Bug Fixes

* **build:** ensure lib new version is added to the bundled documentation ([e15a24f](https://github.com/ovh/design-system/commit/e15a24f7344370a2eb18bdf0f238bdecc4e6d74a))
* **formElements:** inherit input width to allow 100% ([5578b07](https://github.com/ovh/design-system/commit/5578b074e948f680cade4706b44da304dced0968))
* **modal:** prevent odsClose event on unmount if closed ([17e4c4c](https://github.com/ovh/design-system/commit/17e4c4c948558a12151572701fa76c586852a858))


### Features

* **button:** add neutral color ([65a0505](https://github.com/ovh/design-system/commit/65a050593aea11147afdb3c5dc99e6b2c6875f1d))
* **button:** add xs size ([0cf46f8](https://github.com/ovh/design-system/commit/0cf46f869848f39bf5ef4d0bbcb0e5e3d14851b0))
* **button:** review fix ([cd5bdea](https://github.com/ovh/design-system/commit/cd5bdea58dd82e92bb8258439af8af977c72e24a))
* **spinner:** add xs size ([2c7e82e](https://github.com/ovh/design-system/commit/2c7e82e6819aa649ed55689f62d52d872feb5536))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [18.1.0](https://ovh.github.io/design-system/v18.1.0/?path=/docs/design-system-changelog--page) (2024-10-10)
[compare](https://github.com/ovh/design-system/compare/v18.0.0...v18.1.0)

### Bug Fixes

* **breadcrumb:** remove line-height from generic style ([c0b3f9c](https://github.com/ovh/design-system/commit/c0b3f9cd429a19216fabe0bc0eeda85e748720ba))
* **doc:** add enum type value ([caf91ac](https://github.com/ovh/design-system/commit/caf91ac80b13f67ad3b96ff4b2ce14a19ad89039))
* **doc:** order form element stories the same as other components ([f665ece](https://github.com/ovh/design-system/commit/f665eceac9208abf97f8b0a360fc4953dabb32ea))
* **doc:** update v17.2.2 link ([fdc6b23](https://github.com/ovh/design-system/commit/fdc6b236d9992dabc359f822fd21c05e21ccd12a))
* **docs:** fix some typo ([21fa967](https://github.com/ovh/design-system/commit/21fa96709440950044c0027f33c9f05a143a8a4d))
* **docs:** update logo link ([260053d](https://github.com/ovh/design-system/commit/260053d55c99d4adb40c9d507c38102cf277dc84))
* **docs:** update version generator to remove graduated alpha versions ([dbd7ad0](https://github.com/ovh/design-system/commit/dbd7ad063ca74368ee05f5983bd828e10dcae82d))
* **modal:** react testing librairy disconnect callback modal undefined ([6b1729a](https://github.com/ovh/design-system/commit/6b1729a702e1260053bd0f9453007a120af8bdf5))
* **storybook:** update version selector ([a922221](https://github.com/ovh/design-system/commit/a92222112456f02dcf6454a6385ec22f18197fef))
* **style:** enforce font-family inheritance ([106695b](https://github.com/ovh/design-system/commit/106695b333e1c6e6c394ab49e7591df02312e8bf))


### Features

* **button:** can display an icon on the left or right ([274dead](https://github.com/ovh/design-system/commit/274dead44dbfbefe96276f851b68037b930d2454))
* **button:** review fixes ([b7208f4](https://github.com/ovh/design-system/commit/b7208f4932749487ecaf7a9d3065e060e77a6f3a))
* **icon:** add bill + box icons & update globe icon ([d8bf97c](https://github.com/ovh/design-system/commit/d8bf97c4a2cbce1cf63b699ef26597ba60ba763c))
* **link:** can display an icon on the left or right ([9f53ef6](https://github.com/ovh/design-system/commit/9f53ef6ca2e62972ec26d27ac6bd7766a847ec09))
* **phone-number:** set locale fallback to english ([2a333fc](https://github.com/ovh/design-system/commit/2a333fcb3f03cd7126feae006e3a36e7423de429))
* **select:** add specific style to multi-select counter ([bb40e61](https://github.com/ovh/design-system/commit/bb40e612dd867d0f0c0840339d0be78ffe1ed86d))
* **select:** review fix ([8384db5](https://github.com/ovh/design-system/commit/8384db5f437253c2d9c8e047843774a3f0d95022))
* **table:** update header color to neutral-050 ([cca45ce](https://github.com/ovh/design-system/commit/cca45ceff660709d94938035d20e28fa70b19b97))
* **text:** remove native margins from tags p & h* ([51f4e7f](https://github.com/ovh/design-system/commit/51f4e7f84dc9b87088129bdc3773f8bc04f29604))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [18.0.0](https://ovh.github.io/design-system/v18.0.0/?path=/docs/design-system-changelog--page) (2024-08-29)
[compare](https://github.com/ovh/design-system/compare/v18.0.0-alpha.1...v18.0.0)

### Features

* **build:** add gh-pages script ([c5e9d6f](https://github.com/ovh/design-system/commit/c5e9d6f88f60d21373c5ac37d263cd00654a9469))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [18.0.0-alpha.1](https://ovh.github.io/design-system/v18.0.0-alpha.1/?path=/docs/design-system-changelog--page) (2024-08-06)
[compare](https://github.com/ovh/design-system/compare/v18.0.0-alpha.0...v18.0.0-alpha.1)

**Note:** Version bump only for package ods







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [18.0.0-alpha.0](https://ovh.github.io/design-system/v18.0.0-alpha.0/?path=/docs/design-system-changelog--page) (2024-07-30)
[compare](https://github.com/ovh/design-system/compare/v17.2.2...v18.0.0-alpha.0)

### Bug Fixes

* **badge:** fix alphabetical order + add color examples in doc ([c10fca5](https://github.com/ovh/design-system/commit/c10fca586df8ec03edef97ab13cc561760724eef))
* **badge:** remove shape attribute ([bc643c3](https://github.com/ovh/design-system/commit/bc643c32b7748c6880c9792e50ff35b78a4f7ab9))
* **badge:** set official colors ([defebb4](https://github.com/ovh/design-system/commit/defebb4fa58fd237a3aace220e59dc168ff00f52))
* **build:** downgrade conventionnal-changelog ([4ade580](https://github.com/ovh/design-system/commit/4ade580d583a434eaed89d373a9fdb4f331203c3))
* **button:** empty button min width ([00582da](https://github.com/ovh/design-system/commit/00582da5136d72c1461abe8510faf5f18f79dd0f))
* **checkbox:** docs ([1edc3de](https://github.com/ovh/design-system/commit/1edc3de225ccddc857f891a05ebf961735378872))
* **checkbox:** export type event ([c8cbb59](https://github.com/ovh/design-system/commit/c8cbb59200a320b9d30aa7e0860febcb0b941863))
* **checkbox:** order props & scss ([00972d8](https://github.com/ovh/design-system/commit/00972d804267b2bf521143b5b0af8bdefdba5078))
* **checkbox:** reset & clear ([8a307b4](https://github.com/ovh/design-system/commit/8a307b477530c89fd4c8d6cd665ecb30a1e52b8f))
* **checkbox:** reset checkbox & radio ([e8f5047](https://github.com/ovh/design-system/commit/e8f5047a6d2590e7a010343f228ad4844ddbb1ac))
* **ci:** add delay for wrapper tests to avoid network issue on new docker container ([2b94913](https://github.com/ovh/design-system/commit/2b949139fa6b5045f834c8c2349058e79bb84696))
* **datepicker:** fix background color of hover & focus ([2b0cf28](https://github.com/ovh/design-system/commit/2b0cf284cfdf3b293c1e795c2ee6b2417aa93bdb))
* **datepicker:** timezone ([69da3fd](https://github.com/ovh/design-system/commit/69da3fd54878105865036449b6d80353764180e4))
* **doc:** clean & define missing component for the gallery ([1a49984](https://github.com/ovh/design-system/commit/1a499843200957fe089a9154d5d9cfd80610e825))
* **doc:** define components individually on preview loader ([b28a1eb](https://github.com/ovh/design-system/commit/b28a1eb481a1b6823727d4d9f81c6d03d6773551))
* **doc:** handle tuple type ([4787ccc](https://github.com/ovh/design-system/commit/4787ccc2fc4d56a75c26db9417faf1bb856e4ccc))
* **doc:** update wording & typo ([0b32123](https://github.com/ovh/design-system/commit/0b32123984eb59141ff7620e0e09b26bf506735d))
* **doc:** use correct new icons on doc pages ([2fdac1f](https://github.com/ovh/design-system/commit/2fdac1f54a1bb4cf128f54851185bd33d4c97771))
* **file-upload:** align error && update doc ([375bcc2](https://github.com/ovh/design-system/commit/375bcc28f0eab326a92527e1a22714e6ebb7e3fb))
* **file-upload:** update error style ([4ffbd7d](https://github.com/ovh/design-system/commit/4ffbd7db2426ae3f4be4a81070e5ca42c2b0d7e0))
* **form:** add misc fixes & improvments ([8daa730](https://github.com/ovh/design-system/commit/8daa730d2a33c92d6c8bc4a4456ca52d9e399476))
* **modal:** event name in test ([9ea848d](https://github.com/ovh/design-system/commit/9ea848ddb84a19ef15f85d11dc2cde9905c75f50))
* **modal:** replace cross icon name by times & adjust icon font size ([317af3d](https://github.com/ovh/design-system/commit/317af3d6cd247a510f8aef22cc420fae1d9f8f04))
* **pagination:** after rebase pagination event ([c13fec8](https://github.com/ovh/design-system/commit/c13fec8bb5dd586fb3c9d2e5ca382ba83e96d241))
* **phone-number:** add shadow on flag && misc updates ([00bc87d](https://github.com/ovh/design-system/commit/00bc87db2ade7c237f20241be734469248fb04c8))
* **project:** set correct latest version ([c3c87db](https://github.com/ovh/design-system/commit/c3c87db50891e8da601bb89f22ed44ff56f71181))
* **range:** css adjustement ([1a42894](https://github.com/ovh/design-system/commit/1a42894927a2527fb9f4ead96da584c6602bd379))
* **range:** defaultValue & min max change ([4f4d62d](https://github.com/ovh/design-system/commit/4f4d62de3b156ddbf0295007cb98cca546450643))
* **range:** dual value not overtake ([68b49b9](https://github.com/ovh/design-system/commit/68b49b94fb3f14d98e973a8517235cd49347265d))
* **range:** overlap thumb ([053b807](https://github.com/ovh/design-system/commit/053b807aafe86162bdb606575e77f609c3372723))
* **range:** rename folder ([344f3d3](https://github.com/ovh/design-system/commit/344f3d30fab529eec7ebe0030722a3507956c174))
* **range:** step change ([79ef842](https://github.com/ovh/design-system/commit/79ef8428023fe987764ccce4c9f2feb99fc8310a))
* **range:** step change & style ([851204c](https://github.com/ovh/design-system/commit/851204c3ab3f45e0cb973c533b6de03c88001d33))
* **range:** style ([81181f2](https://github.com/ovh/design-system/commit/81181f213cd8126692a92f38e719e9e17f2b2c15))
* **range:** tooltip & max/min change ([94ea8d1](https://github.com/ovh/design-system/commit/94ea8d171b2c97f0067eaa0480052753d05078cf))
* **range:** tooltip doc ([8a5b1d6](https://github.com/ovh/design-system/commit/8a5b1d65c5297c50e63b0480de82da805bb8ad3b))
* **release:** add missing yarn lock update script hack ([99ce78d](https://github.com/ovh/design-system/commit/99ce78d35e4f9386b1a8b9aa63bcbf88fc880e44))
* **release:** add verification script ([cfeffbd](https://github.com/ovh/design-system/commit/cfeffbdb2c49dbde4bde1156ca2d7a1134cd6670))
* **select:** error with disabled ([19711e3](https://github.com/ovh/design-system/commit/19711e36891e6b2ec6017bb4f35911b9a95d5e33))
* **select:** prevent align issue on small width ([246587d](https://github.com/ovh/design-system/commit/246587def4d1fdfa28d2967c102ce1ad59aaf1ce))
* **select:** prevent value to appear behind caret ([3192687](https://github.com/ovh/design-system/commit/3192687548a1e80ceb6e65b81671fb1cbb2fa958))
* **select:** remove useless quote on properties ([75f7294](https://github.com/ovh/design-system/commit/75f7294f1f229f7fa8e3a65a1d88260c41ba9bf8))
* **select:** set color for selected option ([80c5964](https://github.com/ovh/design-system/commit/80c5964c47c8ab355316329dbd99053f3aae5bb5))
* **select:** test fix ([f2cc3a8](https://github.com/ovh/design-system/commit/f2cc3a81e743681de86404852ef7c7c854507c46))
* **style:** add link color mixin & fix misc issues ([af92e03](https://github.com/ovh/design-system/commit/af92e036768e5cca0f9b407a6a6f8ae7aae2e13a))
* **style:** remove z-index on focus mixin ([6183375](https://github.com/ovh/design-system/commit/6183375fdafeba2729e6da2e69e2d13fe6795aec))
* **switch:** add event & keydown handler ([7978bd8](https://github.com/ovh/design-system/commit/7978bd86aed8869dd40e8c974073d761002a48d6))
* **switch:** disabled with checked item ([9365596](https://github.com/ovh/design-system/commit/936559672c715e80408f7e6c2c233c7f3f14b5e8))
* **switch:** e2e test vue & react ([c5ba056](https://github.com/ovh/design-system/commit/c5ba056894aec3e02c3bd20a1fd50c4a6fa72636))
* **switch:** event focus & blur ([26d8fb8](https://github.com/ovh/design-system/commit/26d8fb81b15f654615f795a83ebee9a3f222c61b))
* **switch:** focus visible style ([fa0bf98](https://github.com/ovh/design-system/commit/fa0bf98e8168a3013120c67fe3a64392c538a1d2))
* **switch:** formik dependance ([d7ef4c0](https://github.com/ovh/design-system/commit/d7ef4c06ae605d467abf5bdefd2c44ee4b90b0a5))
* **switch:** improve docs ([5c5a4d2](https://github.com/ovh/design-system/commit/5c5a4d2b126b425498a1a4b7ce4105756a217607))
* **switch:** item expose radio methods ([26d4a60](https://github.com/ovh/design-system/commit/26d4a60eacec29f412fa3753dd2c830b3cddc756))
* **switch:** test react & vue ([48fc876](https://github.com/ovh/design-system/commit/48fc876f6068a86e0d4d770247032158aeef2c7c))
* **switch:** use size variable & remove size fron item ([b4db210](https://github.com/ovh/design-system/commit/b4db21004ce6821861a8b6a07157428bbfef524c))
* **timepicker:** fix e2e tests ([07ca9aa](https://github.com/ovh/design-system/commit/07ca9aa4eb51aa0cf315d29fccfd99ed6699990b))
* add oldValue to all form element ([ef348bc](https://github.com/ovh/design-system/commit/ef348bc7f8299747f2aa0246afae1c1b2d972f29))
* component previous value to null ([838aed8](https://github.com/ovh/design-system/commit/838aed8120e3ac58fde3e98ba9f949d9726f06df))
* component reset & clear event order + focus & null value ([b23f705](https://github.com/ovh/design-system/commit/b23f7052d244d8ef33f7724f0a0c10063bf1995b))
* pagination & copy event name ([7618e58](https://github.com/ovh/design-system/commit/7618e5805c50fddc670e170e90f74d8acb07c7ec))
* rebase ([c4b77f2](https://github.com/ovh/design-system/commit/c4b77f21334ebb7fbf613cacc47a9235ea1b182e))
* **breadcrumb:** update test and events type ([7a85f9f](https://github.com/ovh/design-system/commit/7a85f9f8e07ce94db618c1dd16cb8107425ba58b))
* **button:** enforce hit area to be the same as actual button element ([c065380](https://github.com/ovh/design-system/commit/c065380ada49c7bfd6c6edb2854b54f205369bdf))
* **button:** update state colors ([06c578d](https://github.com/ovh/design-system/commit/06c578dd5331ac414a9fca5be514a61dbea7f8b5))
* **ci:** ensure navigation test passes ([2dfe1a0](https://github.com/ovh/design-system/commit/2dfe1a0b8f94a15acecac00497fed1c215cf827f))
* **clipboard:** display long content correctly ([7114e48](https://github.com/ovh/design-system/commit/7114e48cd61fefb8a681f31c2cf507f569a3c827))
* **clipboard:** prevent button overflow ([5d071b5](https://github.com/ovh/design-system/commit/5d071b522a5d88446551c8beca3f5aa45e1d2c71))
* **code:** enforce button height to be the same as one-line container ([801254a](https://github.com/ovh/design-system/commit/801254a7fd5cca54d62db4f4d61ee271ad10a966))
* **code:** update padding ([0c70c80](https://github.com/ovh/design-system/commit/0c70c80b19bced121a00095ed97d223f7f98cbf9))
* **divider:** add usages changes in migration doc ([5a8fd98](https://github.com/ovh/design-system/commit/5a8fd98aa3e3841dc79510fb7fd782d736074855))
* **divider:** fix & update documentation ([793b0a3](https://github.com/ovh/design-system/commit/793b0a37475e8242be9622f10d90278dc8c20f69))
* **divider:** update migration guide ([681f46d](https://github.com/ovh/design-system/commit/681f46d248addf435ea5fec3c998e007f96cea6c))
* **doc:** add missing button controls ([26d92b1](https://github.com/ovh/design-system/commit/26d92b1090295b30327abfd1487ef6a46eee125d))
* **doc:** clean up demo until better complex example ([87350ef](https://github.com/ovh/design-system/commit/87350efb9d127ceaa6676a5232edc2416e1a19e1))
* **doc:** enforce theme ([25529a5](https://github.com/ovh/design-system/commit/25529a50f6ed428584ed5e11d40c02303968968a))
* **doc:** error on comment undefined ([c9883e5](https://github.com/ovh/design-system/commit/c9883e5e115787523ca064f37dc970de4c3549bc))
* **doc:** remove enum child title ([e7d3178](https://github.com/ovh/design-system/commit/e7d317880a6669953eca61be789010150f44261f))
* **doc:** rename demo custom classes ([7ac8d53](https://github.com/ovh/design-system/commit/7ac8d53058451c52f8704f2176f6e2efc91fedf4))
* **doc:** update link example ([1cd1fbf](https://github.com/ovh/design-system/commit/1cd1fbf4382420fe8dde30091145b24631804701))
* **doc:** use correct badge + typo ([93569ce](https://github.com/ovh/design-system/commit/93569ce477febdb40d1d0f2ba0215a575749cd8f))
* **doc:** use correct Meta arborescence ([97ff357](https://github.com/ovh/design-system/commit/97ff357f4ee83bcdf78e391438bf8a6d10c02664))
* **docs:** handle composed names for zeroheight links ([7377f0b](https://github.com/ovh/design-system/commit/7377f0b4226e178c26f21f84ab0a9886a016a870))
* **e2e:** add dummy component to ensure focus out test works on most setup ([2290685](https://github.com/ovh/design-system/commit/2290685a0ca373491753cd461d825e306ea20193))
* **e2e:** try to smoothen ci components e2e tests run ([3ad059a](https://github.com/ovh/design-system/commit/3ad059ad59399aef904d6440960f2f2a08eee90f))
* **e2e:** try to smoothen ci wrapper test run ([55e7d3a](https://github.com/ovh/design-system/commit/55e7d3a9e9d7e6a92646762a63f1be64aae941b4))
* **input:** css & doc ([dccccef](https://github.com/ovh/design-system/commit/dccccefda00cd2ce34a4f9d523e8920aeed75d21))
* **input:** rebase gitignore ([ad4d6a3](https://github.com/ovh/design-system/commit/ad4d6a3dfc0092a61c527a055f05c1f8a118f81f))
* **input:** review ([0dbf82e](https://github.com/ovh/design-system/commit/0dbf82ed0e120c9b1f43d930286749661feaa770))
* **input:** review ([1e4b54a](https://github.com/ovh/design-system/commit/1e4b54a49c3262947e67161c86dc79e2f6b0f5c6))
* **input:** style actions ([4a1bc1d](https://github.com/ovh/design-system/commit/4a1bc1d51d945e343ddcd6ab025017017f25c784))
* **input:** style with sass variable ([0a62bc7](https://github.com/ovh/design-system/commit/0a62bc74fae6d682eb4b9fc254cda4b1cb09809a))
* **input:** test ci max worker ([f3ed18b](https://github.com/ovh/design-system/commit/f3ed18bd692d3ee5b61eebce4fce5495953db3cd))
* **link:** adapt icon style to icon font ([49365cd](https://github.com/ovh/design-system/commit/49365cd12ae8c719ebf62f094a611e0328eefe39))
* **link:** docs & cursor ([71fb8ac](https://github.com/ovh/design-system/commit/71fb8ac2a037e08dd8bad355a9659ffdf75bc421))
* **link:** docs & stories ([9c5d8c8](https://github.com/ovh/design-system/commit/9c5d8c8f806e9f0b39a61da5704875b7a2706504))
* **link:** docs with new version ([fd15623](https://github.com/ovh/design-system/commit/fd15623302b84b26917a87d2685deef67c87a534))
* **link:** remove icon part ([9a9c521](https://github.com/ovh/design-system/commit/9a9c521b54860266501eebaff039a2ce3adc356b))
* **link:** review ([72db99a](https://github.com/ovh/design-system/commit/72db99adea15dca054cc4c00a6b54d8339dca9b6))
* **link:** test vue ([15f7bda](https://github.com/ovh/design-system/commit/15f7bdadb0f2bb01b16e887c6a566e0f8e2861c7))
* **ods:** forward style correctly to allow [@use](https://github.com/use) usage ([892aa53](https://github.com/ovh/design-system/commit/892aa535be7fdbca08884706d26cb9b9935487c7))
* **ods:** lint test files ([707ec78](https://github.com/ovh/design-system/commit/707ec78664e40efc2e15315091f7fe3a25d27617))
* **ods:** prevent utils transpiled code to be committed ([b5633db](https://github.com/ovh/design-system/commit/b5633db7e86ace7512ab71625e9fc7a387663d6b))
* **overlay:** set specific z-index ([a089136](https://github.com/ovh/design-system/commit/a0891363de937accf3756a01bd017d8892673219))
* **password:** docs & test navigation ([133a30a](https://github.com/ovh/design-system/commit/133a30abd8d3bbadc00d738fc3d4fbc281964cd2))
* **progress:** docs new linkId ([a44e615](https://github.com/ovh/design-system/commit/a44e61535f5da0e3c4e36a008926e4ecf95c0eed))
* **quantity:** e2e file ([5682374](https://github.com/ovh/design-system/commit/568237435a825129042a079b44d53655fc90364f))
* **quantity:** exportparts name ([56642fd](https://github.com/ovh/design-system/commit/56642fd25f163b28e326d62eb2ceae5db3fbcbba))
* **quantity:** review ([6fe59fd](https://github.com/ovh/design-system/commit/6fe59fdbf01358f8753a1448e923b53addaf76c8))
* **radio:** alignment & container height ([b3b2086](https://github.com/ovh/design-system/commit/b3b2086c64c752ea44d4af745d1554f313534fe9))
* **radio:** alignment docs ([a910d7b](https://github.com/ovh/design-system/commit/a910d7ba8c4f247271424049635f1eae72aac56b))
* **radio:** improve docs & typo ([502972c](https://github.com/ovh/design-system/commit/502972c03eb63f75e1ae7e7f52abb3a6d5bbcd95))
* **radio:** migration docs ([712f6ff](https://github.com/ovh/design-system/commit/712f6ffcfe40a2afe77e9d76fde2cb12e62cf2ec))
* **radio:** remove controller ([a5f821c](https://github.com/ovh/design-system/commit/a5f821cace420f85b1f2afc5e7ba7376c453192d))
* **radio:** remove focus style for focus-visible ([f272968](https://github.com/ovh/design-system/commit/f27296840dd1fed7907bcb67984b679ae20411f6))
* **radio:** test e2e ci ([557bbf7](https://github.com/ovh/design-system/commit/557bbf79daeeab4439c72e3da573c71643c396f4))
* **range:** code adjustement ([bf311b5](https://github.com/ovh/design-system/commit/bf311b5ad44d3533add9633890d2251cd3b763ce))
* **range:** not display tooltip when no value ([ca821e8](https://github.com/ovh/design-system/commit/ca821e83800f0149fbc7825a761cea6bcbc36d98))
* **skeleton:** improve documentation ([57730f9](https://github.com/ovh/design-system/commit/57730f96717dc08231e0b5a240b904ca82fdcf9e))
* **skeleton:** inline doc & css mixin ([a5e07f3](https://github.com/ovh/design-system/commit/a5e07f3a9353d469b1df04ce83df066425039b48))
* **spinner:** expose enum values as type instead of keys ([0ead040](https://github.com/ovh/design-system/commit/0ead040dad60e48817d5c555f2d5b407324b6da6))
* **spinner:** remove unused code ([545c098](https://github.com/ovh/design-system/commit/545c0986ed405d7deabaf6f33d573f9a9ef54d6a))
* **style:** prevent multi forward issue ([129114a](https://github.com/ovh/design-system/commit/129114aeece06d528efcc7af896a73744652eedf))
* **tags:** use information css variable instead of primary ([39d4592](https://github.com/ovh/design-system/commit/39d459251b2134ced1e574b6ed6eedad3ab92934))
* **text:** review ([a40bf45](https://github.com/ovh/design-system/commit/a40bf451d8f69fccf46d0eb1f640cef54836f833))
* **textarea:** rename spellcheck && update doc ([85c9aae](https://github.com/ovh/design-system/commit/85c9aaec46675ef7ef738d18019be797b74c931c))
* **theme:** use latest generated token list ([1c662f1](https://github.com/ovh/design-system/commit/1c662f1e0b8b785679e44d43154ae013a5ad4228))
* **themes:** replace some corrupted code fonts ([ff0cecd](https://github.com/ovh/design-system/commit/ff0cecd22d013bb98ef56672ecaa771fd6ae3c10))
* **timepicker:** formatValue ([b8353ca](https://github.com/ovh/design-system/commit/b8353ca1763c73a5d4c47896b88cb2e748fd3d6c))
* **timepicker:** typo + css ([fb5246c](https://github.com/ovh/design-system/commit/fb5246c7e18ee3e7308b37a1ade30e6df159a012))
* **toggle:** review ([2d0f954](https://github.com/ovh/design-system/commit/2d0f954d50004b1bd070a74967a30936d54cb3ba))
* **tooltip:** change fallback color to text instead of primary ([61171a9](https://github.com/ovh/design-system/commit/61171a922b34745cf647cbc3f22b24aef72fd432))
* **tooltip:** fix examples & demo alignment ([4eb6fc3](https://github.com/ovh/design-system/commit/4eb6fc3d89e3363bb1e9ac9f64767cb5ae15689c))
* **tooltip:** use correct type on event emitter ([4a71276](https://github.com/ovh/design-system/commit/4a712768e4eecc419fa3be7af3ed7320cf22aaa3))
* **vue:** wait for server start before running tests ([25232e9](https://github.com/ovh/design-system/commit/25232e964f0252a560b160b765be9ee28d04604a))


### Features

* **accordion:** fix event prevent default for space scrolling ([199c57c](https://github.com/ovh/design-system/commit/199c57c8f341962f952e1a4fc01478f72e47b3b1))
* **accordion:** fix overall styling and focus, remove animations ([3bfa1b5](https://github.com/ovh/design-system/commit/3bfa1b5dca3d9e0a5645a6708c740272e1298d66))
* **accordion:** fix spaces, cursor style, parts, safari & improve code by removing some listeners ([d2750f9](https://github.com/ovh/design-system/commit/d2750f99eeaadd4d1ecfb8450c9acbfb4525b709))
* **accordion:** handle key down & prevent default ([0cf75b2](https://github.com/ovh/design-system/commit/0cf75b283ccb4303f0fe0f0da02d686d0af73cb0))
* **accordion:** implement component ([bccee6c](https://github.com/ovh/design-system/commit/bccee6c6ac246472de0c8ed579106dd4a2c667e9))
* **accordion:** put handleKeyDown as a separate function, switch doc text to span to avoid margins ([e686832](https://github.com/ovh/design-system/commit/e686832abbe1295d57a9c77c5b03f7ae6942de21))
* **accordion:** update icon size ([32369ad](https://github.com/ovh/design-system/commit/32369ad7817be2b916e798a8f89b6893571a0961))
* **accordion:** update icon size & disabled + open state ([99b16bf](https://github.com/ovh/design-system/commit/99b16bffe4c60d8930fa0276eecd975c68e8beb2))
* **badge:** implement component ([bd96c3f](https://github.com/ovh/design-system/commit/bd96c3faac4914f7334afc8556a382b38049265f))
* **breadcrumb:** add aria-current & update separator style ([f1fc685](https://github.com/ovh/design-system/commit/f1fc685f9dabfe5b62b8c94cc1f6192599d95dc1))
* **breadcrumb:** implement component ([6bda3ed](https://github.com/ovh/design-system/commit/6bda3ed281c4cb251ddc95c0eb7b7a3ce50624f8))
* **breadcrumb:** update with latest design info ([e480193](https://github.com/ovh/design-system/commit/e480193f2846a4d2f64434bf05dae9ba8f54a49c))
* **button:** add documentation ([51b5ed6](https://github.com/ovh/design-system/commit/51b5ed62c20da1603e550730e32022bfdb6015f0))
* **button:** add more rendering tests ([49e9293](https://github.com/ovh/design-system/commit/49e9293642375d78e14881d438808e672a2571d8))
* **button:** implement component ([22b4931](https://github.com/ovh/design-system/commit/22b4931c3bb2348ba5ddb6187a7088c590c6c502))
* **button:** update style into separate mixins && clean-up ([6b61316](https://github.com/ovh/design-system/commit/6b6131629b7ea453b35320bbc18cc20d12e6ee48))
* **card:** implement component ([ec30d5f](https://github.com/ovh/design-system/commit/ec30d5fdb86485170df370a5f45054451760d15d))
* **card:** remove wrapper & update documentations and tests ([5dbafc5](https://github.com/ovh/design-system/commit/5dbafc5d45d8a08e5837e905e8f5d1ec297439a9))
* **card:** set className as direct string ([edab630](https://github.com/ovh/design-system/commit/edab6309f1e1167361bb68a0dd39e295958a4b7a))
* **card:** update storybook documentation examples ([59dc71e](https://github.com/ovh/design-system/commit/59dc71e34194c259152d1fdecb052f9d947dc304))
* **cart:** add migration doc ([0321d35](https://github.com/ovh/design-system/commit/0321d354c27a7d0a5ffa27f77fef4a854358892e))
* **clipboard:** add part on tooltip ([19a7f7d](https://github.com/ovh/design-system/commit/19a7f7de0424498403465d71895219398a33454a))
* **clipboard:** implement component ([205fcd2](https://github.com/ovh/design-system/commit/205fcd241326ff01aaaf4e7a79851c027b7c1a3f))
* **code:** implement component ([b8b0911](https://github.com/ovh/design-system/commit/b8b091132c4079a8e122ec9fe94f0bba3cf784cf))
* **content-addon:** add component migration doc ([3b0c48f](https://github.com/ovh/design-system/commit/3b0c48ff0b6080355153832a4cec76122c4db2dd))
* **datepicker:** add today indicator ([90b7bea](https://github.com/ovh/design-system/commit/90b7bea880e829d04673f32b6f8a1f3ef2419d10))
* **datepicker:** implement component ([30b0afc](https://github.com/ovh/design-system/commit/30b0afc122f70c87d5b62adebee795f147f14e3d))
* **dependencies:** bumps stencil to 4.16 ([7d3be5b](https://github.com/ovh/design-system/commit/7d3be5b4c313f6a6cf36e80bf6d27f26458d3472))
* **divider:** implement coponent ([896df6e](https://github.com/ovh/design-system/commit/896df6e0402b42a0ada8310a2339f2d7b8b64bc2))
* **doc:** add search-bar migration doc ([8e377fc](https://github.com/ovh/design-system/commit/8e377fc4cf1903b3c345ea0fe1dafa04a069274b))
* **doc:** change generation doc ([83011d6](https://github.com/ovh/design-system/commit/83011d69533f5e22b6fc8318cf26636facac19e6))
* **doc:** import link & text in unattached mdx ([c0b1a9b](https://github.com/ovh/design-system/commit/c0b1a9b38dbd326531cba4d56ee15630b4beab5b))
* **doc:** replace icon list by link ([0de4440](https://github.com/ovh/design-system/commit/0de44409643610367e0e0e79953134ef62a9cb5e))
* **doc:** update spec generation to handle multiple sub-components ([99c2bbb](https://github.com/ovh/design-system/commit/99c2bbbdfa4e23687e96b39ba83377527f3c92ab))
* **doc:** update with migration files ([d3cfb7a](https://github.com/ovh/design-system/commit/d3cfb7add72f6f1f43d8424c238bfafab5b8a8a2))
* **examples:** add gallery page with mixin usages ([f323a12](https://github.com/ovh/design-system/commit/f323a1237a1c95bc41fe1bb852204205ae5c2940))
* **examples:** update react form examples ([2687545](https://github.com/ovh/design-system/commit/26875457e4bfe499e45ba335200f5f0e6910c1b8))
* **file-upload:** add max-size and more custom labels ([b494e14](https://github.com/ovh/design-system/commit/b494e14f5fd22d7555fa71e216c87787651bb718))
* **file-upload:** hide accept labels if no accept is set ([22d7626](https://github.com/ovh/design-system/commit/22d7626656911907630ae311a318a591a4f2070e))
* **file-upload:** implement component ([8d4edf6](https://github.com/ovh/design-system/commit/8d4edf6755ad89959a4513df7d7b7e0670867c1c))
* **file-upload:** update with latest icon changes ([fc9a762](https://github.com/ovh/design-system/commit/fc9a762cf03f3eb41e0335b70c1e5e1de161847f))
* **flag:** add migration doc ([ae8f036](https://github.com/ovh/design-system/commit/ae8f0368af258ab4754cbc9e4cf30f00dd9bef5d))
* **form-field:** address storybook changes ([2a79f7d](https://github.com/ovh/design-system/commit/2a79f7d3541a796ad1dc98429540037f8bfd2a4d))
* **form-field:** address storybook changes ([83bce01](https://github.com/ovh/design-system/commit/83bce010590f28af4fc27e2bb376ae06388520f3))
* **form-field:** display error and helper messages independently ([29dbc09](https://github.com/ovh/design-system/commit/29dbc09cd22a989b1dac6efe600928c5b730f7ed))
* **form-field:** implement component ([1b7940c](https://github.com/ovh/design-system/commit/1b7940c23946cab94f2515c00623f77a81f24594))
* **form-field:** implement component ([0fc9082](https://github.com/ovh/design-system/commit/0fc9082b63f06d0cde4c9b9a0e7f2a7bc5fbfb11))
* **form-field:** rebase to fix e2e tests ci ([63fdad3](https://github.com/ovh/design-system/commit/63fdad3fdc084c2263371de6b4e7ae97c81a10e9))
* **form-field:** resolve style & storybook ([ecae256](https://github.com/ovh/design-system/commit/ecae2566663cd6085af06be0f95d6354fad2db66))
* **form-field:** resolve style, tests & storybook ([086d085](https://github.com/ovh/design-system/commit/086d085884ea476b4689fa4d2dfecbe023f8a9b7))
* **form-field:** update documentation ([c126c83](https://github.com/ovh/design-system/commit/c126c834afaef54f2ee3a778a470fba1134c9511))
* **icon:** add optimized & renamed icons ([fc0c416](https://github.com/ovh/design-system/commit/fc0c41642014d1616048b350abb238db66bafaf3))
* **icon:** fix select & checkbox icons ([0ab68bf](https://github.com/ovh/design-system/commit/0ab68bf28bccfc66374720023adedd21bdaf4933))
* **icon:** implement component ([b4d27ee](https://github.com/ovh/design-system/commit/b4d27eecc6e859856e29d38a4be71a6a2a809111))
* **icon:** update migration guide & rm todo ([6ad6c7a](https://github.com/ovh/design-system/commit/6ad6c7a19db095a1f700642bb0009f9ebb18e2fb))
* **medium:** implement component ([f226ff9](https://github.com/ovh/design-system/commit/f226ff9c853fd59c96b28e8126c66bd4f3371a22))
* **menu:** add component migration doc ([835a6c9](https://github.com/ovh/design-system/commit/835a6c9713537f21ade4ed074d443118eb429462))
* **menu:** update example to outline btn & add link to doc ([cd4c0eb](https://github.com/ovh/design-system/commit/cd4c0eb0e6abcc59d16af827f947a9b5487e62e4))
* **message:** add command to e2e:ci & alignment fix ([21d5f5f](https://github.com/ovh/design-system/commit/21d5f5ff5f1c05c1be81cf594d145da41660b530))
* **message:** component implementation ([9148991](https://github.com/ovh/design-system/commit/91489913fa2133a52626e886754e1020f63215d7))
* **message:** fix alignment & update doc ([46f6404](https://github.com/ovh/design-system/commit/46f64049a927de8226b3c2354c6073e4982ba7e7))
* **message:** replace wrappers with grid & simplify onKeyUp ([a2cff7e](https://github.com/ovh/design-system/commit/a2cff7e3b1880ab801ae58ca2e7cd8dbd302dcc0))
* **modal:** add a max width to buttons so they overflow to the right if needed ([9a9aaa2](https://github.com/ovh/design-system/commit/9a9aaa25c15b2ab604d5f93a15aec5c732b450df))
* **modal:** add a trigger button to demo story ([ab4421b](https://github.com/ovh/design-system/commit/ab4421b3c809d29a081df4e04aafd0f8c9132106))
* **modal:** add animation mixin, adapt tests and base close method on animationend event ([b7dcf11](https://github.com/ovh/design-system/commit/b7dcf11d71e269a46ca93f909d29070d3d9495c4))
* **modal:** add dialog part & add customCss option in demo ([7c625e7](https://github.com/ovh/design-system/commit/7c625e7075812ef00d9b0a951d7440a88b497399))
* **modal:** add e2e rendering tests to check if isOpen attribute really renders the modal properly ([c8e6bbc](https://github.com/ovh/design-system/commit/c8e6bbcad3245e6dc880175fbd916dff0a49207c))
* **modal:** add flex wrap to actions slot ([cdc9711](https://github.com/ovh/design-system/commit/cdc9711d0e8ddf5fbdc2c70bfd48735c6867270d))
* **modal:** add resetRoot and withResetRoot to a new hook file, apply only once in modal code ([ce52770](https://github.com/ovh/design-system/commit/ce527707a20f413a9a2ff1121dc37ffbe249fcfb))
* **modal:** add runInBand to package json ([993f0ff](https://github.com/ovh/design-system/commit/993f0ff3ce0ece3db38dc2b0f93b2c82ee3cdebd))
* **modal:** add test for react with a button ([e274249](https://github.com/ovh/design-system/commit/e274249f6eb9c2195582135d2282633da6a1b09b))
* **modal:** change example name from Dismissible to Not Dismissible ([13411ae](https://github.com/ovh/design-system/commit/13411aee194273ff202392a802a167a138798d6a))
* **modal:** change type to HTMLElement ([d9b77b6](https://github.com/ovh/design-system/commit/d9b77b613865f40349f05226cef3176d26046ffb))
* **modal:** fix alphabetical order in migration doc ([37d5c8b](https://github.com/ovh/design-system/commit/37d5c8bc497c53d43f9cf7d270a4adac2ca55687))
* **modal:** fix e2e navigation test ([101065b](https://github.com/ovh/design-system/commit/101065b7d7c6afe04c5a88cbeba90a86323b8d9b))
* **modal:** fix e2e navigation tests for CI ([0763540](https://github.com/ovh/design-system/commit/0763540df1c98cc1a6e8b1218eec48927629875f))
* **modal:** fix e2e rendering test typo ([0c690db](https://github.com/ovh/design-system/commit/0c690db06a43c20c573af1947f0907224591b7f0))
* **modal:** fix linters ([d538eb0](https://github.com/ovh/design-system/commit/d538eb046ebe002a55332fbba21f6206488bf1d9))
* **modal:** fix overflow hidden issues and add an e2e test ([e260276](https://github.com/ovh/design-system/commit/e2602763237a5230cee56558d9838871f0506129))
* **modal:** fix react & vue e2e tests by adding a delay ([c7ceb25](https://github.com/ovh/design-system/commit/c7ceb25e1a5c4079d4f58b66fb4c03ff35d4e416))
* **modal:** fix storybook controls ([81e459c](https://github.com/ovh/design-system/commit/81e459c5c98dc707613388c4c72812d830d2fa3c))
* **modal:** fix storybook stories ([ea46244](https://github.com/ovh/design-system/commit/ea46244f56d7efec86e6b67c1fd0d7b5473bd551))
* **modal:** fix storyboook issues when switching from demo to docs ([dd482db](https://github.com/ovh/design-system/commit/dd482db774620e9f94817b32a55a1fa4c392fdfd))
* **modal:** fix vue e2e tests by updating the example alongside the test ([265bfca](https://github.com/ovh/design-system/commit/265bfcaabad7069ef82f33c527b6633f83d65ae5))
* **modal:** implement component ([4b65d3b](https://github.com/ovh/design-system/commit/4b65d3b3558f288a80a980189690182854fb90c2))
* **modal:** improve code, order & fix class names ([91c4b7d](https://github.com/ovh/design-system/commit/91c4b7de37969e27f56c581047ae7636dc2177c7))
* **modal:** improve react ods-text presets ([4f847a3](https://github.com/ovh/design-system/commit/4f847a3585a8d9e41d96662d578454f8b64ded3f))
* **modal:** init component ([e2ea3a5](https://github.com/ovh/design-system/commit/e2ea3a5c70307592b1bbbbef787db9bde047be12))
* **modal:** manage body overflow with SCSS rather than JS ([43afb8e](https://github.com/ovh/design-system/commit/43afb8e6b77b1250f497d7f823b0032ef0a2ecb3))
* **modal:** remove useless code & improve react test ([e79e262](https://github.com/ovh/design-system/commit/e79e2628e8e79d1b386020261ef220a08152ff73))
* **modal:** remove useless imports ([bae6222](https://github.com/ovh/design-system/commit/bae6222f3d1fd8ba8d11f210f8b5c8704f8026f4))
* **modal:** remove z-index ([be60b48](https://github.com/ovh/design-system/commit/be60b484c799be47a04f14cba8b07ede79f5945b))
* **modal:** set a 1rem gap in actions ([f3b536f](https://github.com/ovh/design-system/commit/f3b536f625de79f39e6c95c5dc7f6bc478c1ca4c))
* **modal:** set a fixed backdrop color to avoid chromium issues ([05cf1bb](https://github.com/ovh/design-system/commit/05cf1bb91e36d07533327d3cbb82acfaac0f03b3))
* **modal:** set onClick to one liner for dialog element ([f8561c5](https://github.com/ovh/design-system/commit/f8561c5a97ff98ff3f93d372cf5353103c1c9c13))
* **modal:** simplify vue test & fix alphabetical order of Modal in Storybook ([032ae9f](https://github.com/ovh/design-system/commit/032ae9f5e6221cf5380b51d9e174f2ba3ea63cc7))
* **modal:** update storybook demo to not dismissible ([87e2d8f](https://github.com/ovh/design-system/commit/87e2d8f2d1e4e5a470fc49cf627b733ba33b4fa6))
* **modal:** update test label to "its default value" ([39dee25](https://github.com/ovh/design-system/commit/39dee257c8c4402d39e52af325b662485bb6bd8b))
* **ods:** remove generated file from vcs ([8695d95](https://github.com/ovh/design-system/commit/8695d952a8322d6b313be81267599ee144917d87))
* **overlay:** add shadow on arrow tip ([f263d7c](https://github.com/ovh/design-system/commit/f263d7c3e936a1b3eedd805e1286278b32d2fcfd))
* **pagination:** code improvement and total pages/items stabilisation ([126d0f1](https://github.com/ovh/design-system/commit/126d0f1612f4022456c992b714af05a52bed8a9d))
* **pagination:** fix build issues ([a465275](https://github.com/ovh/design-system/commit/a4652759f8ff7ec314bf8f6576c58229394959dc))
* **pagination:** fix focus issues on page keyup and address global code improvements ([af1620b](https://github.com/ovh/design-system/commit/af1620bdfb02e58409ca2ac31d45c160f34349f1))
* **pagination:** fix linters ([bb5c07c](https://github.com/ovh/design-system/commit/bb5c07c1fefdf96456fe5c582bf2db088c696b79))
* **pagination:** fix linters ([83a4d27](https://github.com/ovh/design-system/commit/83a4d277f9c636b0bd558be79add0618d7e19f16))
* **pagination:** fix tooltip issue ([38f533e](https://github.com/ovh/design-system/commit/38f533ea5c685cafb225f3240417263b527d1327))
* **pagination:** fix vue tests ([f173935](https://github.com/ovh/design-system/commit/f173935ee4ff7de70d9984a06d44fd48848f81cd))
* **pagination:** implement component ([d4c4f37](https://github.com/ovh/design-system/commit/d4c4f375d947097f39d64ac1a1ce9cb706c16896))
* **pagination:** improve global code quality by removing magic numbers & adding tests ([9c5e451](https://github.com/ovh/design-system/commit/9c5e451afe0e0bf168e737defee61cda4a1b2a2a))
* **pagination:** improve new pagination method and remove useless code ([58ce14b](https://github.com/ovh/design-system/commit/58ce14bc0cd041893b5917494c31d49696fd7fce))
* **pagination:** improve storybook story names & add a story with slots ([16b2d4f](https://github.com/ovh/design-system/commit/16b2d4fe82ec8966581a7b4690920d399ed6ebf6))
* **pagination:** move code to controller & improve global code quality, replace min and max ([73d85f8](https://github.com/ovh/design-system/commit/73d85f8e20cb7bb16a8ba9c69ecc6b99682b961e))
* **pagination:** remove code duplicates & improve array declaration in controller function ([95943a7](https://github.com/ovh/design-system/commit/95943a7438148da41af3395fb4174d1bbe6bde27))
* **pagination:** remove test logic, declare constants & remove useless scss file ([839172a](https://github.com/ovh/design-system/commit/839172aa8d2dbdd3b0eb7c142288d9a30014212c))
* **pagination:** set methods to private, remove useless functions/magic numbers & improve styling ([9413102](https://github.com/ovh/design-system/commit/9413102d76972b532f13a33530e929b792252c7e))
* **pagination:** styling corrections ([003271a](https://github.com/ovh/design-system/commit/003271a31df7e3970542dab75c810380677a86e8))
* **pagination:** update component lifecycle by playing with the display rather than re-renders ([c560404](https://github.com/ovh/design-system/commit/c56040455703a806005216de7a0e86487a29b064))
* **pagination:** update documentation ([fdd4ada](https://github.com/ovh/design-system/commit/fdd4adac050e5e045deeac891b3451625485ca4b))
* **phone-number:** add missing locales & validation script ([b79c6a1](https://github.com/ovh/design-system/commit/b79c6a16adfcc288b54e2d1d40a0e1fa1d4d662c))
* **phone-number:** implement component ([d248a9b](https://github.com/ovh/design-system/commit/d248a9b925e208886435744ea48fcc3d26a7d2c2))
* **phoneNumber:** update flag style ([43cc43a](https://github.com/ovh/design-system/commit/43cc43a98dcf08f387bb2625c0d2a2433bbc7b92))
* **popover:** implement component ([5186bc0](https://github.com/ovh/design-system/commit/5186bc03079974f7baa7d5d6eb3d40f2648a2709))
* **quantity:** on readonly disabled button ([103c42e](https://github.com/ovh/design-system/commit/103c42e50b180151f029adbfcccdcca30bee1ce6))
* **radio:** add reset methods ([ad9684f](https://github.com/ovh/design-system/commit/ad9684fe007802eab3794a6176a55d41edf60d7c))
* **scripts:** update component generator ([5d8caec](https://github.com/ovh/design-system/commit/5d8caece16ff0a2cae8fbedbc4a0a7795a72ba0a))
* **scripts:** update generator with latest doc changes ([4472aa6](https://github.com/ovh/design-system/commit/4472aa63163491749728f6722da8307014bac078))
* **select:** implement component ([5194e3a](https://github.com/ovh/design-system/commit/5194e3a5b60177b6d86f60fc642244518706367c))
* **spinner:** remove inline attribute ([fb2fd24](https://github.com/ovh/design-system/commit/fb2fd24b8317d84ff0a4f13b9bb159b2e391e32b))
* **spinner:** update attr && add migration doc ([3b25c17](https://github.com/ovh/design-system/commit/3b25c17fe2b6827325068f94e3b7cb7c202794a5))
* **spinner:** update design with latest info ([93b2848](https://github.com/ovh/design-system/commit/93b28483798011ffadbf2cb06527855740dfd49b))
* **src:** prevent generated stencil files to be commited ([c76288e](https://github.com/ovh/design-system/commit/c76288e59d931c77dcc0e88a3f2aa196b8502bde))
* **storybook:** add component DocNavigator ([b372362](https://github.com/ovh/design-system/commit/b372362016c6b50734daa48bf861d6b4603d6011))
* **storybook:** add CustomCss stories for style customization doc ([2aedc68](https://github.com/ovh/design-system/commit/2aedc68ad4677c4234d4ee382082b0a344afd27e))
* **storybook:** add fonts globally to Storybook ([53ae01e](https://github.com/ovh/design-system/commit/53ae01e42ad9ef608d99c5863d07d16b16641445))
* **storybook:** centralize doc in storybook only ([4754ff5](https://github.com/ovh/design-system/commit/4754ff5bbf8020471090c56f8b27c0eab3ba9141))
* **storybook:** exclude decorator & review fixes ([e4bdb3c](https://github.com/ovh/design-system/commit/e4bdb3c4558bfbba6094b66b82aa5cefb8d6b0f6))
* **storybook:** fix removed badge color & break line in migration guide ([e34c7ba](https://github.com/ovh/design-system/commit/e34c7badf69c6ab5707d5e09e5826fa4570a396c))
* **storybook:** replace overview by default for icon canvas ([cc9b507](https://github.com/ovh/design-system/commit/cc9b507a38e9e6390e0e95a819176e87e96fa08f))
* **storybook:** replace warning icon name by an existing one ([b789f50](https://github.com/ovh/design-system/commit/b789f507a65b2b4bebb392679ac84e42cea5fdd3))
* **storybook:** tooltip doc & stories ([234debf](https://github.com/ovh/design-system/commit/234debf248da10a7b92a57fc4df27d7626664de4))
* **storybook:** upgrade to storybook v8 ([1239967](https://github.com/ovh/design-system/commit/123996723ccd63eb74d354f62f594c7c33fcf7da))
* **style:** add lint on ods/src/style ([2fe8ff8](https://github.com/ovh/design-system/commit/2fe8ff8afdc7aede34d83157d6b3a4d4303d79f6))
* **style:** use common focus mixin ([3484013](https://github.com/ovh/design-system/commit/3484013ead0a8dc445d99efb2988b8744d0c2fb9))
* **switch:** add react example with formik ([91b25ba](https://github.com/ovh/design-system/commit/91b25bae8bfd942c9c22fa72a123a176b69111b3))
* **switch:** fix lint ([df02467](https://github.com/ovh/design-system/commit/df024678f69e4b1a55a50e20280bea9c7bd51286))
* **switch:** focus on switch and not item ([07e9afe](https://github.com/ovh/design-system/commit/07e9afe31cb33b2f59cfe59522fc7b77ceba5d46))
* **table:** implement component ([f133420](https://github.com/ovh/design-system/commit/f1334209821bd4c41b380cb186e86da105370bfe))
* **tabs:** implement component ([cf96de6](https://github.com/ovh/design-system/commit/cf96de64a088b3f02ae62dae54bb60335c823b02))
* **tabs:** manage horizontal overflow ([a0cb984](https://github.com/ovh/design-system/commit/a0cb98480ff09c8f7bce1bd4ee3c0bd6fd5d4355))
* **tag:** implement component ([6e50d3b](https://github.com/ovh/design-system/commit/6e50d3b21d92813cfb0ab18912a25d2f5cc28e98))
* **tag:** increase icon size and add ellipsis ([44de498](https://github.com/ovh/design-system/commit/44de498bca1646369af845151a4fec05bc1eb0c7))
* **tags:** remove shape attribute ([2765387](https://github.com/ovh/design-system/commit/276538739c7d03ac9e16b8052e5007881f9f2dac))
* **tags:** remove sm size ([35745bf](https://github.com/ovh/design-system/commit/35745bf7da38a6f3b5dd3a923db8831b0e9ef66a))
* **tags:** remove variant attribute ([8253305](https://github.com/ovh/design-system/commit/8253305ba43c4f8a6e53ce272a4f6313ff0d25ed))
* **textarea:** implement component ([5ccf404](https://github.com/ovh/design-system/commit/5ccf404bb45ac4673592e307774016efd8428e66))
* **themes:** add fonts ([ea972a5](https://github.com/ovh/design-system/commit/ea972a57330eeeed43f0c1499d4ec5e12c04fc76))
* **themes:** update generated tokens ([543eefe](https://github.com/ovh/design-system/commit/543eefe1acfdf017c29aaad3d108627479f73bdb))
* **tooltip:** add shadow dom selector & events & fix listener on disconnect ([b6f37cb](https://github.com/ovh/design-system/commit/b6f37cb48eb78f85839d416ed190bb0ce6268db4))
* **tooltip:** implement component ([25a43d3](https://github.com/ovh/design-system/commit/25a43d304a27f365a13227513e4565e327e8245d))
* **tooltip:** update documentation ([e27f270](https://github.com/ovh/design-system/commit/e27f270d3486a54a4c3aca2ffb92ad5d74e90951))
* **vue:** add wrapper e2e test app ([e3054e8](https://github.com/ovh/design-system/commit/e3054e80b38148e7e11d1bfc4a245af4581c2f31))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.2.2](https://ovh.github.io/design-system/v17.2.2/?path=/docs/design-system-changelog--page) (2024-05-21)
[compare](https://github.com/ovh/design-system/compare/v17.2.1...v17.2.2)

### Bug Fixes

* **button:** add test in react ([c7c5be3](https://github.com/ovh/design-system/commit/c7c5be3262ba860b7c73f829a1ee7415e59e6c9e))
* **button:** add test to check handleclick not called when disabled ([6b07285](https://github.com/ovh/design-system/commit/6b0728516715ef2bbd1efa8ff20742ef2bd19371))
* **button:** disable pointers events on disabled ([b15a409](https://github.com/ovh/design-system/commit/b15a409b2ab6804d71ebc2e721a28abc970d038a))
* **button:** prevent click on disabled for older browser version ([ea9ee09](https://github.com/ovh/design-system/commit/ea9ee09672dd6c6780d9bc91ac2a26b895cb0a81))
* **button:** remove margin & padding to prevent click event outside of the component ([6540b7c](https://github.com/ovh/design-system/commit/6540b7c75dd0d217dc90310725899c2c0af85d21))
* **radio-button:** change border width ([1c0b13d](https://github.com/ovh/design-system/commit/1c0b13d86dc8c4c2d1c275f5ae6c3d17384a68bd))


### Features

* **radio-button:** add xs size ([a74cbc5](https://github.com/ovh/design-system/commit/a74cbc5e7884646fe114344ed6715e4d7f516c76))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.2.1](https://ovh.github.io/design-system/v17.2.1/?path=/docs/design-system-changelog--page) (2024-03-19)
[compare](https://github.com/ovh/design-system/compare/v17.2.0...v17.2.1)

### Bug Fixes

* **clipboard:** fix surface background color ([3a1878e](https://github.com/ovh/design-system/commit/3a1878e8f93807c00072fbdbc7a22043c185ae80))
* **menu:** add comment to inform about the use of important ([8c8507a](https://github.com/ovh/design-system/commit/8c8507ae884276773f709253ae4d7bb41a5f7de3))
* **menu:** force min height in style instead of CDK ([143d4ac](https://github.com/ovh/design-system/commit/143d4ac0fc70d9b6914599206c007ac4ed6b2d86))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.2.0](https://ovh.github.io/design-system/v17.2.0/?path=/docs/design-system-changelog--page) (2024-03-15)
[compare](https://github.com/ovh/design-system/compare/v17.1.0...v17.2.0)

### Bug Fixes

* **clipboard:** add test for no content slot ([fd9a174](https://github.com/ovh/design-system/commit/fd9a174b92ace11aa34351227544815223197842))
* **clipboard:** add warn when message slot not defined ([0815fe4](https://github.com/ovh/design-system/commit/0815fe475bda3f060543d72f9bd0162f55ecea7b))
* **clipboard:** aff check with text content for tooltip ([29b353f](https://github.com/ovh/design-system/commit/29b353f1c49bdcd4cc7ba85057cc625cc1881190))
* **clipboard:** fix tooltip close delay ([2849fb0](https://github.com/ovh/design-system/commit/2849fb0c42955fcee2568e7aaa2df9d76ee404e4))
* **clipboard:** lint ([5c6f557](https://github.com/ovh/design-system/commit/5c6f557cf71742696041585cb52c6bfb8c80a97b))
* **clipboard:** message undefined when slot not defined ([7eeafc5](https://github.com/ovh/design-system/commit/7eeafc53a35c8236a27ab32447105dac416e54d6))
* **datepicker:** remove selector variant from style ([807c4f7](https://github.com/ovh/design-system/commit/807c4f7ac2f7ca299fd4ccf265a894b7bd084b6b))
* **datepicker:** safari styles ([bc4f243](https://github.com/ovh/design-system/commit/bc4f2435387bb1eae5275bd8fb7e1d692baf3c8a))
* **datepicker:** set days to 2 letters ([bdfaa79](https://github.com/ovh/design-system/commit/bdfaa795aed2cf47c86c324a4f718c661bffce58))
* **datepicker:** surface border color in error ([02a3d47](https://github.com/ovh/design-system/commit/02a3d47f29704ce838eb30ef68eeffc9c02047f5))
* **input:** button focus visible ([f556680](https://github.com/ovh/design-system/commit/f5566809f01df314aca20f446dedb2daaa0e517b))
* **input:** clearabed button focusabled on disabled ([1600a5e](https://github.com/ovh/design-system/commit/1600a5ec986f18955bd7b86e1b9f63bd60558423))
* **input:** order tabindex ([9170668](https://github.com/ovh/design-system/commit/91706680e29262b1d6c3f67a3e5f63c6327b37a9))
* **link:** fix multiple active color on safari ([11c8a21](https://github.com/ovh/design-system/commit/11c8a21a04f780c7081bc53d9a6c619ab5f35158))
* **link:** multiple active states on safari ([7ccfe69](https://github.com/ovh/design-system/commit/7ccfe69a8cd815f84ced5f09113688a6e6dc879e))
* **modal:** change width value on breakpoint ([3e7aeba](https://github.com/ovh/design-system/commit/3e7aeba0f2cb54b4fe57fff3bd9b6797893de656))
* **modal:** fix styles and dont use media breakpoint ([3eaf7f4](https://github.com/ovh/design-system/commit/3eaf7f4e562b00920f949510a383073e6a126666))
* **modal/popover:** fix scrollbar overlay ([1c22ff4](https://github.com/ovh/design-system/commit/1c22ff497f2030d6eb4a8ebd1428afa34db7894a))
* **modal/popover:** keep content inline for modal ([1ec9602](https://github.com/ovh/design-system/commit/1ec960297f2319f263784d86c54202139e0a673d))
* **modal/popover:** overflowing surface ([0c5d298](https://github.com/ovh/design-system/commit/0c5d298be87509aa680ac1ef6d6b2cd7674de5cd))
* **modal/popover:** overflowing surface ([f33385c](https://github.com/ovh/design-system/commit/f33385c76c31025cb30c3c8e3cf0628d3afee0f1))
* **pagination:** display pagination with page ender 2 ([a78d5d2](https://github.com/ovh/design-system/commit/a78d5d2e6126a49dcdd4412cd7fa437f41170eac))
* **pagination:** fix e2e tests ([0250635](https://github.com/ovh/design-system/commit/0250635b9896c9a1eaca9ffd56fa0ac9b1cc6f08))
* **pagination:** forbid defaultCurrentPage values below 1 or above total pages ([4fff9d1](https://github.com/ovh/design-system/commit/4fff9d1cb7b42df65d59255a1f0cf4dad85689fa))
* **pagination:** hide navigation when totalitems is inferior to itemsPerPage ([6d4343b](https://github.com/ovh/design-system/commit/6d4343b8ad24c2ef1b887cb6e30a63db763c3e21))
* **phone-number:** event on type ([9882236](https://github.com/ovh/design-system/commit/9882236367d321f5cdc28122acbe75f7ebce1d50))
* **quantity:** fix storybook doc and demo to add default variant ([d33e305](https://github.com/ovh/design-system/commit/d33e305f30e3bb87e9632c7d5df33481bf886045))
* **search-bar:** lint ts ([0dd161f](https://github.com/ovh/design-system/commit/0dd161f0c94741f9c14c6d1604cf8487d5b5499b))
* **searchbar:** emit submit event on enterkey on input ([95750a8](https://github.com/ovh/design-system/commit/95750a81a352e82417da26a3832c72664f89766c))
* **searchbar:** fix test unit ([cab347f](https://github.com/ovh/design-system/commit/cab347f18d308ceeab2b11010447b5e2da0783be))
* **table:** column width on large screens on Firefox ([f405ca4](https://github.com/ovh/design-system/commit/f405ca421af9d3f456e5bd32a3e009b59a3e1498))
* **table:** fix build and doc ([700c313](https://github.com/ovh/design-system/commit/700c31306c91fc94730ff8673d1f8be4e5d8ff0f))
* **textarea:** add style for disabled ([b187eb6](https://github.com/ovh/design-system/commit/b187eb66179e567d8cdccd7ad796288991984482))
* **textarea:** change style to be like osds-input ([8bdd3a6](https://github.com/ovh/design-system/commit/8bdd3a6369ff4ea39efdaa647e88e8c62a82f07f))
* **textarea:** lint style ([9de6610](https://github.com/ovh/design-system/commit/9de6610ca69ff074c591733413b12c75e8613537))
* **tile:** fix animation on safari ([265c704](https://github.com/ovh/design-system/commit/265c7042cf88421d80e18c21906028c92748c1fe))
* **tile:** fix style of checking state in safari ([72fee99](https://github.com/ovh/design-system/commit/72fee99f6057ee8004be4be0bc71822192c0f272))


### Features

* **input:** focus on inpt after clear ([97579f6](https://github.com/ovh/design-system/commit/97579f65c3f8653e786196662ad181459b660636))
* **input:** selectable icon input ([520e746](https://github.com/ovh/design-system/commit/520e7466e55b0f3fe2ddf9c1e8ac1d124c497cd9))
* **pagination:** create defaultCurrentPage attribute, remove current & update tests ([b7ad13c](https://github.com/ovh/design-system/commit/b7ad13ccdeae0f259b9ca08895dd8543b67c41d8))
* **pagination:** display arrows ([c4408b2](https://github.com/ovh/design-system/commit/c4408b296ca3425cb51b9a14f86551b9f46450dd))
* **table:** initial commit ([c400d37](https://github.com/ovh/design-system/commit/c400d37ca00f5b2dad6701eb4087907d8c29969a))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.1.0](https://ovh.github.io/design-system/v17.1.0/?path=/docs/design-system-changelog--page) (2024-02-09)
[compare](https://github.com/ovh/design-system/compare/v17.1.0-alpha.2...v17.1.0)

**Note:** Version bump only for package ods





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.1.0-alpha.2](https://ovh.github.io/design-system/v17.1.0-alpha.2/?path=/docs/design-system-changelog--page) (2024-02-08)
[compare](https://github.com/ovh/design-system/compare/v17.1.0-alpha.1...v17.1.0-alpha.2)

**Note:** Version bump only for package ods





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.1.0-alpha.1](https://ovh.github.io/design-system/v17.1.0-alpha.1/?path=/docs/design-system-changelog--page) (2024-02-06)
[compare](https://github.com/ovh/design-system/compare/v17.1.0-alpha.0...v17.1.0-alpha.1)

**Note:** Version bump only for package ods







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.1.0-alpha.0](https://ovh.github.io/design-system/v17.1.0-alpha.0/?path=/docs/design-system-changelog--page) (2024-02-05)
[compare](https://github.com/ovh/design-system/compare/v17.0.3...v17.1.0-alpha.0)

### Bug Fixes

* **lint:** use correct config ([fbb9713](https://github.com/ovh/design-system/commit/fbb9713ffd33c74dea1790b9b134c735942725de))
* **modal:** add tests for disconnectCallback ([04ee656](https://github.com/ovh/design-system/commit/04ee65695dbdba13fba9424c28799b6a014b1348))
* **modal:** close on disconnect ([8655b3c](https://github.com/ovh/design-system/commit/8655b3cb2d59909d6faadbcc045149349893076c))
* **pagination:** fix TS linters ([d2a5379](https://github.com/ovh/design-system/commit/d2a5379e19aa4e4f482d6d3e9607171037e92fd1))
* **tile:** end slot position when there is no start slot ([3a25c67](https://github.com/ovh/design-system/commit/3a25c6770ef1db209dea51b1cc0050c7878e9ef2))
* **tile:** fix position for chrome ([10c9432](https://github.com/ovh/design-system/commit/10c9432ac80a236697115bbecb36fa1e0d621391))
* **tile:** set grid-area for chromium ([2256bd6](https://github.com/ovh/design-system/commit/2256bd64e76fe187b3675a3d33f8c91336672da3))


### Features

* **datepicker:** add form integration ([1120d85](https://github.com/ovh/design-system/commit/1120d8516d305738b6a75f24ebe94664b1687f9e))
* **doc:** add Canvas tag to all components & disable shortcuts ([22e47ab](https://github.com/ovh/design-system/commit/22e47ab4fb20d54b8033558a221f265f5b2e997b))
* **doc:** dark background when contrasted is true ([bd014be](https://github.com/ovh/design-system/commit/bd014be575ea48028b10becc8bce3d106bafd9f0))
* **doc:** fix misc. feedback review ([41ca17d](https://github.com/ovh/design-system/commit/41ca17dc14583be638fce2b08ff3ac90a6d74008))
* **doc:** rework usage guidelines & add slots ([941559a](https://github.com/ovh/design-system/commit/941559a82d642d2a353fa9cf9e97ba6fe277b1ff))
* **doc:** test Preview ([c0c7bef](https://github.com/ovh/design-system/commit/c0c7bef38b5fd010b55e3d4d3ee853693170ffa1))
* **form-elements:** add missing events ([4a37bc5](https://github.com/ovh/design-system/commit/4a37bc558b41c3415fd5e006da4b46f9e1389798))
* **input:** add form integration ([50fdcfa](https://github.com/ovh/design-system/commit/50fdcfa43ca51e6d278c315a090a8fd888929d5a))
* **pagination:** add defaultItemsPerPage attribute ([512c11d](https://github.com/ovh/design-system/commit/512c11d1bdbdce22c3cd9fd2e96547eab7beb0c7))
* **pagination:** address changes ([f9112fe](https://github.com/ovh/design-system/commit/f9112fe4b6a8c9a11955d6e4b00f826ef18503aa))
* **pagination:** address changes ([1c39b36](https://github.com/ovh/design-system/commit/1c39b36f3d80c128e10c647d5473c8b516715afa))
* **pagination:** address changes ([e5ed5b8](https://github.com/ovh/design-system/commit/e5ed5b83ec728a576af072e02dbe79f879c43513))
* **pagination:** address changes ([f861003](https://github.com/ovh/design-system/commit/f86100346cd1d205c0294890239df53831af91f6))
* **pagination:** address changes ([bab3bdd](https://github.com/ovh/design-system/commit/bab3bddc6305e47e158b98e2f1f88a755784b379))
* **pagination:** address changes & fix storybook ([ec84674](https://github.com/ovh/design-system/commit/ec84674eb65bf1a213acae23d68e8d9cd8258b39))
* **pagination:** rebase ([9929597](https://github.com/ovh/design-system/commit/992959733459d4e05480081a38ef320f36ecae54))
* **password:** add form integration ([05f396d](https://github.com/ovh/design-system/commit/05f396d830b72e3fe5481ea2f753120e60d07301))
* **phone-number:** add form integration ([eda5b17](https://github.com/ovh/design-system/commit/eda5b17f6ef7c9e815623567c4e96c349da05e57))
* **quantity:** update formatting ([6c4f421](https://github.com/ovh/design-system/commit/6c4f4216a9930c0086b1d4ca4445ff1e7890c8c9))
* **range:** add form integration ([57412bf](https://github.com/ovh/design-system/commit/57412bf0e869f8b720079fc287c3c8f2000bf5fa))
* **select:** add form integration ([62fa493](https://github.com/ovh/design-system/commit/62fa4934a361aa4741fb43d1a4c2f172a446b3b1))
* **textarea:** add form integration ([5751632](https://github.com/ovh/design-system/commit/5751632f05028fdc2f9df61c0055506c84938af3))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.0.3](https://ovh.github.io/design-system/v17.0.3/?path=/docs/design-system-changelog--page) (2024-01-31)
[compare](https://github.com/ovh/design-system/compare/v17.0.3-alpha.1...v17.0.3)

**Note:** Version bump only for package ods





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.0.3-alpha.1](https://ovh.github.io/design-system/v17.0.3-alpha.1/?path=/docs/design-system-changelog--page) (2024-01-31)
[compare](https://github.com/ovh/design-system/compare/v17.0.3-alpha.0...v17.0.3-alpha.1)

**Note:** Version bump only for package ods







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.0.3-alpha.0](https://ovh.github.io/design-system/v17.0.3-alpha.0/?path=/docs/design-system-changelog--page) (2024-01-29)
[compare](https://github.com/ovh/design-system/compare/v17.0.2...v17.0.3-alpha.0)

### Bug Fixes

* **quantity:** fix arrow showing in safari ([e826c42](https://github.com/ovh/design-system/commit/e826c4236d79ace3153d3421d5ef29d0fce41075))
* **radio:** fix log issue in radio button story ([3610d3c](https://github.com/ovh/design-system/commit/3610d3c206e803161a80757ca514b4fe6e7be243))
* **radio-group:** fix log error in storybook ([0d54745](https://github.com/ovh/design-system/commit/0d54745c07e3e12c85cc3519edbe282d2c83b633))
* **tile:** rounded border on safari ([915acfd](https://github.com/ovh/design-system/commit/915acfdfc33fd4b3dbb24c79ad549494d5f120c2))
* **toggle:** auto adapt slot container when content is too long ([74ddb45](https://github.com/ovh/design-system/commit/74ddb45f50e053b9039f91a8aad4f819b410debf))
* **toggle:** fix toggle shrink when slot are too big ([ae65809](https://github.com/ovh/design-system/commit/ae65809804f8a759b3805c689863f53d94a21f9f))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.0.2](https://ovh.github.io/design-system/v17.0.2/?path=/docs/design-system-changelog--page) (2024-01-18)
[compare](https://github.com/ovh/design-system/compare/v17.0.1...v17.0.2)

### Bug Fixes

* **chip:** prevent generated files to be commited && clean unused files ([723d08b](https://github.com/ovh/design-system/commit/723d08b47b45e061fa09524f4ce8e3cee1ab05c5))
* **components:** prevent generated files to be commited && clean unused files ([e4fdb6c](https://github.com/ovh/design-system/commit/e4fdb6cf35a50023579a5c16d7a398eef4cfac4d))
* **doc:** update tsconfig used ([e308069](https://github.com/ovh/design-system/commit/e308069048e94706223a5695cd09991b13f83cf2))
* **menu:** fix double click behaviour ([50a17cc](https://github.com/ovh/design-system/commit/50a17ccf63150a6442e97dcf78abdd0798997a62))
* **menu:** fix tests ([774eda5](https://github.com/ovh/design-system/commit/774eda5d8517abde9c434f67cb30242423ae50aa))
* **modal:** add class to body to hide overflow ([f0c079a](https://github.com/ovh/design-system/commit/f0c079a348328f82162c63a13315f93dc9ac93f0))
* **modal:** add key behaviour on storybook and close button ([e1e3e1f](https://github.com/ovh/design-system/commit/e1e3e1f8a8381682784d10be03216db81a84399e))
* **modal:** addressing changes ([07e2e60](https://github.com/ovh/design-system/commit/07e2e6042f4ce6027ecc1481c6355e55223c10e3))
* **modal:** change button key behaviour to dispatch click ([ba71bea](https://github.com/ovh/design-system/commit/ba71bead537601c80c2c838f6fe12da3d6dde737))
* **modal:** fix position when trigger is not centered ([1a520d4](https://github.com/ovh/design-system/commit/1a520d4402a00390d2a1038f3b99960123329d5d))
* **modal:** hide overflow when modal is opened automatically ([16d236c](https://github.com/ovh/design-system/commit/16d236c819026acd4839113181d6ce1e56351312))
* **modal:** inputs are shrunk ([1fd9016](https://github.com/ovh/design-system/commit/1fd9016cba9a48d8c7ae51019fd40feb930bc004))
* **modal:** prevent scroll when modal is open ([e72a018](https://github.com/ovh/design-system/commit/e72a018233656c9aee2674d163056b11e4757037))
* **tabs:** add accessibility tests ([82b3e5d](https://github.com/ovh/design-system/commit/82b3e5d943675144b5059dcb7d2c748477a4048d))
* **tabs:** add behaviour of keys arrow ([b44b79e](https://github.com/ovh/design-system/commit/b44b79e4f874ffea8a7b0f010e5cab99bcd81a41))
* **tabs:** change focus with key arrow ([006d4f6](https://github.com/ovh/design-system/commit/006d4f63d6b3abf2220ef2389f3670b61d397e16))
* **tabs:** fix controller test ([6a20fac](https://github.com/ovh/design-system/commit/6a20fac837052d4976ff8d829b039b57b172e084))
* **tabs:** fix handleArrowKey func when no tab are active ([6c70007](https://github.com/ovh/design-system/commit/6c70007b7ae7b05ccf6b64dd82e31f53436bdcab))
* **tabs:** fix handlearrowkey test ([1e1eb3d](https://github.com/ovh/design-system/commit/1e1eb3dd70bd055341f869d6298bef763b29feda))
* **tabs:** fix tests ([7a959d6](https://github.com/ovh/design-system/commit/7a959d66b8a2ef5f3e28d413cc302f6d48b6d7c7))


### Reverts

* Revert "fix(modal): add class to body to hide overflow" ([cbf47f8](https://github.com/ovh/design-system/commit/cbf47f8a73e9f741b65fe38690ae8520795a83d4))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.0.1](https://ovh.github.io/design-system/v17.0.1/?path=/docs/design-system-changelog--page) (2024-01-15)
[compare](https://github.com/ovh/design-system/compare/v17.0.0...v17.0.1)

### Bug Fixes

* **button:** order correctly css props ([798d1ad](https://github.com/ovh/design-system/commit/798d1adb36e4d794a1fd357be654b38f355583c3))
* **checkbox-radio-buttons:** fix reviews ([e60803c](https://github.com/ovh/design-system/commit/e60803cff5f8877e7d916143e0c2d2ba9601f9c0))
* **checkbox-radio-buttons:** fix slots display to align smaller texts vertically ([c539787](https://github.com/ovh/design-system/commit/c539787b9de88ed5e70a4f06fa5d8872113731ff))
* **pagination:** adding e2e tests ([7fb92e8](https://github.com/ovh/design-system/commit/7fb92e8484fd24e15a2d4aae2496bbcf1dd65b79))
* **pagination:** goes out of bounds ([9384a95](https://github.com/ovh/design-system/commit/9384a95bb76b68b89a9c27b3aab37b830227cd4a))
* **pagination:** goes out of bounds ([420405b](https://github.com/ovh/design-system/commit/420405bcb95f8f14f9beb23d5291e62f0c4f4e7d))
* **pagination:** improving e2e tests ([1ef6aa4](https://github.com/ovh/design-system/commit/1ef6aa454304ea2544baa038d5297da45e69fd61))
* **theme:** fix font-weight import in 600 ([4fe489d](https://github.com/ovh/design-system/commit/4fe489dfb0cbbdd7289ef24f2d72abde16d26295))
* **theme:** fixing fonts on Safari ([b72fb78](https://github.com/ovh/design-system/commit/b72fb78110ddb6218cfd961326213b5676b1af96))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [17.0.0](https://ovh.github.io/design-system/v17.0.0/?path=/docs/design-system-changelog--page) (2024-01-02)
[compare](https://github.com/ovh/design-system/compare/v16.6.0...v17.0.0)

### Bug Fixes

* **app:** resolve release conflicts && fix doc-api generation ([8d9eb6e](https://github.com/ovh/design-system/commit/8d9eb6e76a3f321a0984e1bc56df43ecc3cd30f5))
* **ci:** disable components-ovh && fix components dependency to ensure build order ([9da5056](https://github.com/ovh/design-system/commit/9da505667b9a2e9a23eb797221f11de29671118b))
* **ci:** ensure components.d.ts file is present ([f8cfd84](https://github.com/ovh/design-system/commit/f8cfd84a83fdf66379419cb8df40454870c46033))
* **core:** config version ([adb8464](https://github.com/ovh/design-system/commit/adb8464f6d92300642802d629344d98f0793c08f))
* **datagrid:** improve documentation ([0a05892](https://github.com/ovh/design-system/commit/0a058926eeecfffa9fbea73dad72efd50596faae))
* **datagrid:** improve documentation ([717349a](https://github.com/ovh/design-system/commit/717349aadfd3d46b7f7ccaba563b8f6ea7208d9c))
* **datagrid:** overflowing elements ([c28c054](https://github.com/ovh/design-system/commit/c28c0549fcb958ec17206501ff48b652d7e5541f))
* **datagrid:** overflowing elements ([4404b48](https://github.com/ovh/design-system/commit/4404b4894e43076537b04534698751186b1cb48b))
* **datepicker:** add explicit component dependency ([6d9cef7](https://github.com/ovh/design-system/commit/6d9cef7c409ab8f53339d650e9f3e3480220b3af))
* **doc:** add missing define on menu story ([cfb4bd9](https://github.com/ovh/design-system/commit/cfb4bd97faadad61062351be42bbfd4c01ac6aae))
* **doc:** fix typo ([befc995](https://github.com/ovh/design-system/commit/befc99545d644ffa9377c61fffcceb0190635d93))
* **doc:** rm useless slotting in menu usage ([59ba550](https://github.com/ovh/design-system/commit/59ba5500a8cacdbbebb06662e2fddf4d18b81f9c))
* **doc:** update install doc with new arch ([ab0e6dc](https://github.com/ovh/design-system/commit/ab0e6dc0e367b310889923ac6e194d34151e41b7))
* **menu:** safari ellipsis ([823bf12](https://github.com/ovh/design-system/commit/823bf120b7f7459f5813f9ab8861eae20502bf67))
* **modal:** change overflow to allow ocdk-surface correct display ([136db3f](https://github.com/ovh/design-system/commit/136db3f2450c993ba13d3ccede4fb0040e2fd4f1))
* **stencil:** generate bundled components && fix datagrid components declaration ([fa64b1b](https://github.com/ovh/design-system/commit/fa64b1b5d06ee7f402285a3a345e5e952c80b6a3))
* **stencil:** use correct plugin order ([446422b](https://github.com/ovh/design-system/commit/446422beee7c65d5148e50ca6f5c15de1b32722c))
* **tabs:** change margin to padding to handle hover ([aa83601](https://github.com/ovh/design-system/commit/aa83601462623b6c95e7ee7e011688f258ede7c8))
* **tooltip:** remove useless test and fix closeSurface call ([f15f4d6](https://github.com/ovh/design-system/commit/f15f4d6e9508ba8523a63c812529a250c1fd3e3f))


### Features

* **components:** generate updated docs ([62e1526](https://github.com/ovh/design-system/commit/62e1526fac078550b08f83d100611b7499d13312))
* **doc:** fix message e2e tests ([1dabcb2](https://github.com/ovh/design-system/commit/1dabcb20ea42e0ddf4825f1928c0e8501a9880b2))
* **doc:** fix wrong imports ([bf49826](https://github.com/ovh/design-system/commit/bf49826df13ba525cae9b99f70a5ac6e8758594b))
* **doc:** move added usage files to new archi folders ([32be333](https://github.com/ovh/design-system/commit/32be333f41a8469530abe791ca0277d944941943))
* **doc:** storybook misc fixes & new features ([2bba058](https://github.com/ovh/design-system/commit/2bba0584e89eaf38aa53fc1a97adfcfae58ea4fa))
* **examples:** add examples project to test ODS integration internally ([76d2a36](https://github.com/ovh/design-system/commit/76d2a364560821c91fed48bd5c10ea2ea7c8fb1e))
* **pagination:** add odsPaginationItemPerPageChanged on itemPerPage change ([1233a3d](https://github.com/ovh/design-system/commit/1233a3d320b04824858921eff57e59736cfeb616))
* **scripts:** update component generator for new arch ([bc4141d](https://github.com/ovh/design-system/commit/bc4141d42d1ccd49eb35a68a896a0e9bf67caca0))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.6.0](https://ovh.github.io/design-system/v16.6.0/?path=/docs/design-system-changelog--page) (2023-12-13)
[compare](https://github.com/ovh/design-system/compare/v16.5.0...v16.6.0)

### Bug Fixes

* **breadcrum:** add link complement argument ([641002e](https://github.com/ovh/design-system/commit/641002ed60a3eabd2a47a855a41396c909567e95))
* **breadcrumb:** add event click on item ([1da94ef](https://github.com/ovh/design-system/commit/1da94efa07c64724bb9c72ebcaaad2ed558c675a))
* **breadcrumb:** generation doc ([8c84f69](https://github.com/ovh/design-system/commit/8c84f69dabb10db88dcc593c42a4fafedea941f3))
* **breadcrumb:** ref type ([ae98d6e](https://github.com/ovh/design-system/commit/ae98d6e09026dc5011144c2c12ce55db4f9d5074))
* **button:** fix position of end when there is no start slot ([3e2bdd0](https://github.com/ovh/design-system/commit/3e2bdd04cf523e065f0aa1628d93442b03c847b1))
* **core:** enum ods html anchor element rel ([1f6e1a0](https://github.com/ovh/design-system/commit/1f6e1a02e54918a346afb2093b2cf60b42dc63e5))
* **datagrid:** elements cutoff ([4276beb](https://github.com/ovh/design-system/commit/4276beb6b240aacad5cbc69090513617d88a40ab))
* **datagrid:** fix linter ([83ccc56](https://github.com/ovh/design-system/commit/83ccc56b8eb9cd9c95da946c164d8918991c4914))
* **datagrid:** improve storybook ([653fc37](https://github.com/ovh/design-system/commit/653fc37028dff0f22eb0b6302b50ae7d993e08e9))
* **global:** add missing packages to ods-components ([#302](https://github.com/ovh/design-system/issues/302)) ([0f94ce1](https://github.com/ovh/design-system/commit/0f94ce162d177d2c3c8b340727c1491380ff3bf4))
* **pagination:** event payload & watch total pages ([4aedd79](https://github.com/ovh/design-system/commit/4aedd79cbf93fb1246a3b4d2bb43a0aeb7ef9a4b))
* **phone:** show flag on local env ([3816ddc](https://github.com/ovh/design-system/commit/3816ddc26946d7da092a4dd9dcb51465e0bdf610))
* **phone-number:** fix flag shadow in select ([e433e9b](https://github.com/ovh/design-system/commit/e433e9b1d7a6d5b5807061e010a09651fa539b9a))


### Features

* **chip:** add odsChipRemoval event ([41aa1dd](https://github.com/ovh/design-system/commit/41aa1dd4714ddc5b1bc3833d4fc24aa5482db597))
* **chip:** add odsChipRemoval event ([7ac1257](https://github.com/ovh/design-system/commit/7ac12578ac9197da06986907fb02b7baba73c290))
* **chip:** add odsChipRemoval event ([5c82f10](https://github.com/ovh/design-system/commit/5c82f106fae0bc14817f9d6b99adade0502a677d))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.5.0](https://ovh.github.io/design-system/v16.5.0/?path=/docs/design-system-changelog--page) (2023-11-24)
[compare](https://github.com/ovh/design-system/compare/v16.4.0...v16.5.0)

### Bug Fixes

* **datagrid:** row change & storybook ([#288](https://github.com/ovh/design-system/issues/288)) ([1bb506e](https://github.com/ovh/design-system/commit/1bb506eec9f33101258214eca00e94211d300283))
* **modal:** switch to dialog element ([#290](https://github.com/ovh/design-system/issues/290)) ([92900be](https://github.com/ovh/design-system/commit/92900be0a01aa4dbc4b474c20404ffa72975ab7a))
* **phone-number:** flag height  ([3cc09b9](https://github.com/ovh/design-system/commit/3cc09b900816d9fe8484196986f8d069207dc4f5))
* **select:** observable for label change ([#284](https://github.com/ovh/design-system/issues/284)) ([272075b](https://github.com/ovh/design-system/commit/272075bed0008b96a3623eb6cbb0f64f98d168ff))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.4.0](https://ovh.github.io/design-system/v16.4.0/?path=/docs/design-system-changelog--page) (2023-11-16)
[compare](https://github.com/ovh/design-system/compare/v16.3.2...v16.4.0)

### Bug Fixes

* **phone-number:** oldValue undefined ([8098e22](https://github.com/ovh/design-system/commit/8098e22a51f3416ec8c5dfc4f81f7b896fb84f34))
* **phone-number:** trigger event ([9104220](https://github.com/ovh/design-system/commit/9104220e0a959d53841c457ac27d6055ab4b7630))
* **storybook:** add missing value on release list ([1e6a59f](https://github.com/ovh/design-system/commit/1e6a59fc6ec2b9e2447da07855df82a57368e8d3))


### Features

* **datagrid:** component MVP ([#225](https://github.com/ovh/design-system/issues/225)) ([8156c4c](https://github.com/ovh/design-system/commit/8156c4c45fe4da5007f9e27d295707e348689d4b)), closes [#280](https://github.com/ovh/design-system/issues/280)
* **scripts:** add component generator ([53f552c](https://github.com/ovh/design-system/commit/53f552c34da10f600ebabaf3e963950537c59138))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.3.2](https://ovh.github.io/design-system/v16.3.2/?path=/docs/design-system-changelog--page) (2023-11-13)
[compare](https://github.com/ovh/design-system/compare/v16.3.1...v16.3.2)

### Bug Fixes

* **accordion:** add test ([121eaf3](https://github.com/ovh/design-system/commit/121eaf3b8996f70731bb4b9838d5e9f73089a454))
* **accordion:** dont open when disabled ([200e5c7](https://github.com/ovh/design-system/commit/200e5c707e52578c19b305d8b0faddf8479d1db1))
* **phone-number:** input event send when type on input ([#277](https://github.com/ovh/design-system/issues/277)) ([4795eb9](https://github.com/ovh/design-system/commit/4795eb954ace2ccaadc67e679f55b8c4ddbfac80))
* **quantity:** change value onblur to be valid with step ([155f675](https://github.com/ovh/design-system/commit/155f67579437aca50cb094d03806394d644cc5b9))
* **quantity:** fix test and calculation ([e03cf0b](https://github.com/ovh/design-system/commit/e03cf0b58d98bfdfe57c368ded2f2dee082a2924))


### Features

* **accordion:** add disabled to story ([c294f36](https://github.com/ovh/design-system/commit/c294f366e33539ce994b53d5b5f1aced30ca1985))
* **accordion:** disable focus when disabled ([f30e237](https://github.com/ovh/design-system/commit/f30e2372ebfa5c2d6779164ffb895e4023283657))
* **medium:** adding react and vue examples ([cff4418](https://github.com/ovh/design-system/commit/cff4418f669f0a81e061b15432f81a7c11ca4ce6))
* **medium:** adding react and vue examples, update CHANGELOG.md ([a3372f6](https://github.com/ovh/design-system/commit/a3372f6f372c3216a26cdafd8d766a58f09dd970))
* **medium:** fixing story and unused code ([5cf52ad](https://github.com/ovh/design-system/commit/5cf52ad589d61396ed9d166fbb74bade67a15d3f))
* **medium:** init component ([7c64f8c](https://github.com/ovh/design-system/commit/7c64f8c4a9839d8d35802b644a641a0d418f9e73))
* **medium:** refactoring after review ([fd805a9](https://github.com/ovh/design-system/commit/fd805a9950f415fad9dda0f5857b24406a83154a))
* **medium:** refactoring after review ([528d0ce](https://github.com/ovh/design-system/commit/528d0ce3900c94a5312c038df815b5471e2462f5))
* **modal:** add event on open and close ([51f16c6](https://github.com/ovh/design-system/commit/51f16c699435aa8cde52ed211c18b2aa64f48563))
* **tile:** do screenshot in one page only ([10a5461](https://github.com/ovh/design-system/commit/10a54612f9180430521f9af5076b9217e95c20bc))


### Reverts

* Revert "feat(medium): adding react and vue examples" ([978dab5](https://github.com/ovh/design-system/commit/978dab5b21d0659f96589502d254da7d63ad3dd8))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.3.1](https://ovh.github.io/design-system/v16.3.1/?path=/docs/design-system-changelog--page) (2023-11-07)
[compare](https://github.com/ovh/design-system/compare/v16.3.0...v16.3.1)

### Bug Fixes

* **datepicker:** hideSibligsMonthDays on update datepicker ([c2b0bf1](https://github.com/ovh/design-system/commit/c2b0bf12c82f0e4c2524f20c4b5af5d170306ebf))
* **datepicker:** rename methods ([ef002c9](https://github.com/ovh/design-system/commit/ef002c992d15e34d00aa053931708c25ceaa3978))
* **select:** shift tab now focus trigger on first ([ffa43c4](https://github.com/ovh/design-system/commit/ffa43c448f6285e9b7b4ed77ee5452e046700d11))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.3.0](https://ovh.github.io/design-system/v16.3.0/?path=/docs/design-system-changelog--page) (2023-11-02)
[compare](https://github.com/ovh/design-system/compare/v16.2.1...v16.3.0)

### Bug Fixes

* **build:** prevent weird Stencil issue regarding types generation ([3c505d4](https://github.com/ovh/design-system/commit/3c505d459112b963c3b7544ef046f61e28d60644))
* **button:** not ghost variant on circle button ([fd04b92](https://github.com/ovh/design-system/commit/fd04b921cc1d940433929846d205f4adf634dd61))
* **button:** remove circle ghost ([bcc58ad](https://github.com/ovh/design-system/commit/bcc58adf69bdb90fd1a66530b5360cd6f465ca45))
* **datepicker:** close picker when select date ([6c06d99](https://github.com/ovh/design-system/commit/6c06d991dcbcd49516be4ace3be157aa881fd74b))
* **datepicker:** has focus on click input ([b9b74ce](https://github.com/ovh/design-system/commit/b9b74ce3b496cacb8dad2797f3e84e8166396ff6))
* **datepicker:** navigation on hidden sibling days ([f8cf480](https://github.com/ovh/design-system/commit/f8cf4809da6415b32726b32ece9205c12cf60a22))
* **datepicker:** show thers mouth day ([ad71794](https://github.com/ovh/design-system/commit/ad7179462fd8a90a557222d3d9de0bb22bac607b))
* **datepicker:** typo show siblingd mouth days & test ([4259ec1](https://github.com/ovh/design-system/commit/4259ec1d907ce254c1a73ba07968f7c1aec031c6))
* **doc:** put back specific doc commands ([442af61](https://github.com/ovh/design-system/commit/442af61b9f292a192920885c7b5c56056d345710))
* **flag:** fixing display on Safari browser by adding default width and height ([498708c](https://github.com/ovh/design-system/commit/498708c18b01f10b5ab9e0840062f82be850815f))
* **flag:** import type first ([dc83440](https://github.com/ovh/design-system/commit/dc8344055a1bd6b5e7edfd7a8376107cb86a4cd1))
* **flag:** rebasing on master and autofixing eslint errors ([60275a9](https://github.com/ovh/design-system/commit/60275a9a1eb52fe891fc4dbfc4200be443aff9e6))
* **icon:** review ([6fd43b9](https://github.com/ovh/design-system/commit/6fd43b9a82aa9cb2b8177e5608dc66c923ad9d04))
* **icon:** screenshot timeout ([461c099](https://github.com/ovh/design-system/commit/461c099a3b810a6b9c66e943bd7f03c6d92944cf))
* **menu:** fixing story ([55f3a2a](https://github.com/ovh/design-system/commit/55f3a2a55c6b64d01a60577f5b796b324ab0ac56))
* **menu:** replace initialized element with getter ([7671901](https://github.com/ovh/design-system/commit/7671901c27aca209a153f8f7365f964db4a5ebce))
* **nenu:** test icon class ([c323d59](https://github.com/ovh/design-system/commit/c323d598e20c6978de200ea9c553ed70873c5653))
* **project:** put back codeowners ([5268601](https://github.com/ovh/design-system/commit/52686016b0b25acc23ebff522f602fb4a9ad642f))
* **select:** fixing display on Safari browser by adding 100% width to inner div ([331440a](https://github.com/ovh/design-system/commit/331440acad96e7130bcc560e40e19d27bf571b11))
* **textarea:** fixing display on Safari browser by adding width and box-sizing ([6441f20](https://github.com/ovh/design-system/commit/6441f209b1afc15e45b05871d471a381e6440a80))
* **tile:** fixing display on Safari browser by adding flex properties ([89e0a8b](https://github.com/ovh/design-system/commit/89e0a8b372cc323ab75139e38020a51ae29bee56))


### Features

* **icon:** apply lint rules ([bdfc2c3](https://github.com/ovh/design-system/commit/bdfc2c327c25295300cab9c37a40e9043ee486e3))
* **lib:** upgrade to Stencil 4.7 && add clean command ([aa7e165](https://github.com/ovh/design-system/commit/aa7e1655efa370f49e4ef60660c0d09b5d2c3b2f))
* **linter:** fix lint errors on text component ([e0f3c92](https://github.com/ovh/design-system/commit/e0f3c92a02d619cf695e945f8f036cc1cf0019af))
* **linter:** fixing dependency ([ce7655d](https://github.com/ovh/design-system/commit/ce7655d54e4c36209bafb2436c04e8d99e78d55b))
* **linter:** fixing errors ([9181a5a](https://github.com/ovh/design-system/commit/9181a5aabec4130e9500077e6ef8b8686b48863a))
* **linter:** fixing import sorting with plugin ([30e25a9](https://github.com/ovh/design-system/commit/30e25a92719325168f3f7135d07fb5aaf207b044))
* **linter:** fixing object curly spacing ([f59b24a](https://github.com/ovh/design-system/commit/f59b24a35758adf554262a2755f0340d92a137d7))
* **linter:** fixing react example build by ignoring eslint errors ([151effc](https://github.com/ovh/design-system/commit/151effc12844cca00a9099dc936c24a355af6ea7))
* **linter:** update eslint config with rules, plugins and reporter ([a722500](https://github.com/ovh/design-system/commit/a72250081e9fb10c47729212eafba84707a19166))
* **linter:** update eslint config with rules, plugins and reporter ([7587b0f](https://github.com/ovh/design-system/commit/7587b0f1d0cf16e704052f63c10f995e2cc12c55))
* **linter:** updating config for import/order (type first), import spaces ([d586677](https://github.com/ovh/design-system/commit/d58667792db248bab2bb7c55ca3f057cdfe7d571))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.2.1](https://ovh.github.io/design-system/v16.2.1/?path=/docs/design-system-changelog--page) (2023-10-18)
[compare](https://github.com/ovh/design-system/compare/v16.2.0...v16.2.1)

### Bug Fixes

* **ci:** disable screenshot tests until reworked ([6cd906a](https://github.com/ovh/design-system/commit/6cd906af48a955b25cd5f59a17de7fff3a54c764))
* **datepicker:** addressing changes ([9af539b](https://github.com/ovh/design-system/commit/9af539b9d35a8e138c6781827add8299e39e1582))
* **datepicker:** addressing changes ([d94b053](https://github.com/ovh/design-system/commit/d94b053fe001b736a43964eb4ae39a586af7d45f))
* **datepicker:** addressing changes ([0836d0b](https://github.com/ovh/design-system/commit/0836d0baa36a13936fc4bbd4196f315a328a539d))
* **datepicker:** addressing changes ([13c7aae](https://github.com/ovh/design-system/commit/13c7aae7cb8fc7973de9d26f91a95b5e8ef40639))
* **datepicker:** fix exports ([e0d5a13](https://github.com/ovh/design-system/commit/e0d5a1347649a2407d51cdac9d45ba494038be53))
* **env:** removing undesirable package-lock.json file ([7598b81](https://github.com/ovh/design-system/commit/7598b819c7cee2cc29749d0ef3b1f63257426e62))
* **modal:** closed in Storybook on window location change ([50d5c86](https://github.com/ovh/design-system/commit/50d5c860f5b4c4f93028d66331198d855374faae))
* **modal:** disable broken test temporarily ([c76b6c4](https://github.com/ovh/design-system/commit/c76b6c424834e98557f7d5cc5c68e6438fddb71a))
* **modal:** fix broken tests ([367ad90](https://github.com/ovh/design-system/commit/367ad9013e13e2be0478cf5bf941e48fb2b65ae7))
* **modal:** fix reviewed changes ([7e8cfcd](https://github.com/ovh/design-system/commit/7e8cfcd440d6ad97debcc25e2dcc7658de61f3e0))
* **modal:** forcing watcher trigger ([f71d16d](https://github.com/ovh/design-system/commit/f71d16d34476cb4caac506d7ddb9e17821c4482d))
* **modal:** refactor locationchangetrigger ([81f1d07](https://github.com/ovh/design-system/commit/81f1d07c78f299c71a882f20b17638271a083833))
* **modal:** trigger inert at modal open and fix e2e test ([32b44fc](https://github.com/ovh/design-system/commit/32b44fc16063969608c1c1dfea17c83c8dd948bc))
* **popover:** remove useless code in lifecycle ([33504f9](https://github.com/ovh/design-system/commit/33504f92b2410a03fa5666fc56f5ee25506f2656))
* **reports:** add missing components ([a97107a](https://github.com/ovh/design-system/commit/a97107a20ca09ef7565309589918a28838d6aea5))
* **sass:** fix lint errors ([0231f8d](https://github.com/ovh/design-system/commit/0231f8d0640672faf64b2c68a25cb70d58880810))
* **sass:** fixing imports and case error ([e32ebe4](https://github.com/ovh/design-system/commit/e32ebe4083977faa0f4ce993e97f1ee6124d8db1))
* **sass:** theme imports ([14f89a2](https://github.com/ovh/design-system/commit/14f89a2e862b94cab360e489fbaaab7039205084))
* **script:** update theme yarn script ([9974e6f](https://github.com/ovh/design-system/commit/9974e6fc99f6beeab432e0d48b91e1855901379d))
* **select:** ajustement mutationObserver ([a611d8f](https://github.com/ovh/design-system/commit/a611d8f8c422793dc3cc60a9bc6ca85cd8e6ac1a))
* **select:** change label on slot change ([8c73dd4](https://github.com/ovh/design-system/commit/8c73dd42d2562ebf81425f66b9ca0e101b60d4a2))
* **select:** multiple obsevable ([f03f1f2](https://github.com/ovh/design-system/commit/f03f1f23bc269abe607c0121fcf4964e38ac46da))
* **select:** no option found for mutationObserver ([4f64e2b](https://github.com/ovh/design-system/commit/4f64e2ba486c3687644eb74b5dd5e90be52bf075))
* **text:** add export to public api ([5e63f1a](https://github.com/ovh/design-system/commit/5e63f1a3e58d558428380ccd402896fbccfe2962))
* **text:** add missing test line for coverage ([813566e](https://github.com/ovh/design-system/commit/813566e80b3521cebf7a443847f287bb90b9784f))
* **text:** merge constrasted action with attributes ([8e8c2b2](https://github.com/ovh/design-system/commit/8e8c2b29b3b8f540ff4727b927eb5562535baa8b))
* **text:** remove destructuring object ([2cf2fe7](https://github.com/ovh/design-system/commit/2cf2fe7286c169b2bd501b10813f520cd42e6b12))
* **text:** restore ternary and add new test for it ([bab890c](https://github.com/ovh/design-system/commit/bab890c4a18d17fe5adcb816b83c47e89f78fa5d))
* **themes:** exclude broken file from lint && add root lint command ([162b287](https://github.com/ovh/design-system/commit/162b287f2ef1a416b66f7c0b353c656f02150b65))
* **theming:** use correct sass syntax ([4bd2298](https://github.com/ovh/design-system/commit/4bd2298b641a78b6a4d346681525125d7917653f))


### Features

* **app:** add new ovh components ([94c307f](https://github.com/ovh/design-system/commit/94c307f80f818efbe332b21bd614190545cf54c2))
* **datepicker:** add locale prop ([0cda07e](https://github.com/ovh/design-system/commit/0cda07eb26d7d8d2e2b17b3aa2b9fe160a2d7399))
* **sass linter:** added html reporter for stylelint ([bc9c3b1](https://github.com/ovh/design-system/commit/bc9c3b1471f480cbc4c7f4fa5697c25a20873e59))
* **sass linter:** added Stylelint with concentric order ([5610de2](https://github.com/ovh/design-system/commit/5610de2d19c7d560f6b037a3f2a2b93957b057a5))
* **sass linter:** adding lint scripts in all components' and theme's package.json ([d78cc5c](https://github.com/ovh/design-system/commit/d78cc5c2bcc676525d7b20e532b0e2d570e06839))
* **sass linter:** fixing at-rule-conditional-no-parentheses rule ([bc70eac](https://github.com/ovh/design-system/commit/bc70eac77984c8a8b13df979f672556fcecae0c8))
* **sass linter:** fixing basic stylelint errors ([e92252d](https://github.com/ovh/design-system/commit/e92252d068956b64c15dd992b6b374fecfe545fd))
* **sass linter:** fixing rollback stylelint errors ([e5619cc](https://github.com/ovh/design-system/commit/e5619ccd470fccc85c23e209ac20727587b61e79))
* **text:** take all variations in one page screenshot only ([2737681](https://github.com/ovh/design-system/commit/27376818870a800e3f40598178456e75ea3d1f39))
* **text:** use local import instead of theme directly ([6e50ce9](https://github.com/ovh/design-system/commit/6e50ce9af10371fab496b5e9921e1ff069249021))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.2.0](https://ovh.github.io/design-system/v16.2.0/?path=/docs/design-system-changelog--page) (2023-10-04)
[compare](https://github.com/ovh/design-system/compare/v16.1.1...v16.2.0)

### Bug Fixes

* **docs:** better type for Array & typo ([a2c99a4](https://github.com/ovh/design-system/commit/a2c99a44030bef1de2a08ee7c91822783b19f508))
* **menu:** update expected button element ([7fe7058](https://github.com/ovh/design-system/commit/7fe7058f42a1fd1e46433793161af0f3fe79529a))
* **text:** reorganize style files ([144c697](https://github.com/ovh/design-system/commit/144c697c1839c16ff62e26286fb91c9bc0ec7aa0))
* **textarea:** emit odsValueChange on value change ([753749f](https://github.com/ovh/design-system/commit/753749fd86557a3790d66bc7a3f4bc6194828b10))
* **textarea:** emit odsValueChange on value change ([d828b4e](https://github.com/ovh/design-system/commit/d828b4e7942d9ff93425fb594d69dc8f18dcc2c6))


### Features

* **ci:** add command to build only minimal required libs ([0828885](https://github.com/ovh/design-system/commit/082888576cea53e62072580f2f9d50fcebe507ad))
* **clipboard:** add tooltip message for confirmation ([#208](https://github.com/ovh/design-system/issues/208)) ([edd9463](https://github.com/ovh/design-system/commit/edd9463cb6b65a5d8c61105bf7a7bccc0bae2155))
* **datepicker:** addressing changes ([c8664f8](https://github.com/ovh/design-system/commit/c8664f82b7959c38117b1031303c48e44e2ee39d))
* **datepicker:** addressing changes ([c33cd08](https://github.com/ovh/design-system/commit/c33cd0800333c0fe1ec2dce4779d291bd23e9e81))
* **datepicker:** addressing changes ([536c061](https://github.com/ovh/design-system/commit/536c061e4da9e59e2071e9c314accb0617014246))
* **datepicker:** addressing changes ([5247506](https://github.com/ovh/design-system/commit/5247506bce475ce050365b066c9c57caf3f507c2))
* **datepicker:** addressing changes ([bd4dc48](https://github.com/ovh/design-system/commit/bd4dc48be6ef88af092e0c0a2211f5eeb8a57e42))
* **datepicker:** addressing changes ([e7e80c1](https://github.com/ovh/design-system/commit/e7e80c1e4262c153c9a34364b1d06404a23815c4))
* **datepicker:** addressing changes ([ab5e233](https://github.com/ovh/design-system/commit/ab5e2336200cfb48ba4591b426b8ec1336f765b0))
* **datepicker:** addressing changes ([0cc2f76](https://github.com/ovh/design-system/commit/0cc2f763040b9c06d1f6a9589eca05425e85bc65))
* **datepicker:** date picker component ([acc5b28](https://github.com/ovh/design-system/commit/acc5b2881a2eb89af5847305e7f19f58812c1a4b))
* **datepicker:** remove typedoc-json-to-md ([021d89f](https://github.com/ovh/design-system/commit/021d89f05c6680cf4bf6b95542f41202f8af1d09))
* **datepicker:** step 1, component with no style ([15b5f0e](https://github.com/ovh/design-system/commit/15b5f0e7a8a8d2646d750e0016183fc38f6c36b7))
* **datepicker:** step 2, styling the component ([#207](https://github.com/ovh/design-system/issues/207)) ([cd851a1](https://github.com/ovh/design-system/commit/cd851a112a19462351801a3a970b157f2e741eb5))
* **datepicker:** step 3, excluding dates ([#219](https://github.com/ovh/design-system/issues/219)) ([ed6cdb7](https://github.com/ovh/design-system/commit/ed6cdb7bc817de2847b03c0db4e04deb5a79b5bf))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.1.1](https://ovh.github.io/design-system/v16.1.1/?path=/docs/design-system-changelog--page) (2023-09-28)
[compare](https://github.com/ovh/design-system/compare/v16.1.0...v16.1.1)

### Bug Fixes

* **docs:** generate spec for multiple component ([96cf6fd](https://github.com/ovh/design-system/commit/96cf6fd6dfa221a492f3a59b4d3d6ea8a3934db3))
* **docs:** generate spec.md ([236bb64](https://github.com/ovh/design-system/commit/236bb6433175e8956d1e2a8b5b7e321a209f8b90))
* **docs:** import type ([cc77a5f](https://github.com/ovh/design-system/commit/cc77a5f3da677013d1dc506f6887227b1cb35db8))
* **storybook:** update tile attributes ([e11aea1](https://github.com/ovh/design-system/commit/e11aea15bc1bda5046bb2f3949ceeea7709f19ba))
* **tabs:** spec multiple ([5441ade](https://github.com/ovh/design-system/commit/5441ade2e04cbad48f9f55851d3ceb86535c18a7))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.1.0](https://ovh.github.io/design-system/v16.1.0/?path=/docs/design-system-changelog--page) (2023-09-27)
[compare](https://github.com/ovh/design-system/compare/v16.0.1...v16.1.0)

### Bug Fixes

* **build:** avoid crash on gh-page missing dir error ([2507ec2](https://github.com/ovh/design-system/commit/2507ec270e8f4154195653b628717d6d502886b8))
* **code:** added missing background-color for text ([b0d3d27](https://github.com/ovh/design-system/commit/b0d3d27a4585bf78d1b0f47b2346d3285b2b1215))
* **code:** contrasted versions colors for "primary", "info", "text" ([894ddd7](https://github.com/ovh/design-system/commit/894ddd7285ac3d51ba18a8f9ca7a2676289ad69d))
* **flag:** ods flag iso code with object freeze ([39e5c9b](https://github.com/ovh/design-system/commit/39e5c9b130a036b084539626b4545ecc0a75cfd3))
* **phone-number:** ajustement PR + import file dynamic ([e90ccef](https://github.com/ovh/design-system/commit/e90ccef088dfaaca1d2013834f70012e9196e3df))
* **phone-number:** default string for placeholder & prefix ([59f23a8](https://github.com/ovh/design-system/commit/59f23a84bf154517cced3e1c393aa304bed46e24))
* **phone-number:** file storybook ([fe3c5e0](https://github.com/ovh/design-system/commit/fe3c5e007adb8bc4c8ff96995c5984f8533abc37))
* **phone-number:** fix review ([355f250](https://github.com/ovh/design-system/commit/355f250b9c8205a583e039f5b18eda363741a577))
* **phone-number:** flag enum & list iso codes ([3d1f67f](https://github.com/ovh/design-system/commit/3d1f67f6cbfeb7660f1a33c251cdd4ee291a9ae5))
* **phone-number:** import type ([ba4a6f7](https://github.com/ovh/design-system/commit/ba4a6f7dd2073d23581572f8185476f358325cc8))
* **phone-number:** isoCode with second navigator option ([3c140e1](https://github.com/ovh/design-system/commit/3c140e1edeaedf5c2672c09b22d78607952b3ba4))
* **phone-number:** rebase ([0bd797f](https://github.com/ovh/design-system/commit/0bd797f3877674556e966eb6afaaa6e426fff329))
* **phone-number:** review ([4a0c71d](https://github.com/ovh/design-system/commit/4a0c71de7cf6f8debb100c8abce5019bfada7cef))
* **phone-number:** style select + clear input error + sort list select options ([77b1957](https://github.com/ovh/design-system/commit/77b19574adc3dacc16d2278b2b23905d87112032))
* **phone-number:** type countries ([3ead774](https://github.com/ovh/design-system/commit/3ead774d729b9c3f057e0dca89c5297acaf0ad61))
* **phone-number:** value type & remove el ([b3a4e5d](https://github.com/ovh/design-system/commit/b3a4e5db341fb865d7c62f40c4d1006a30a5a057))
* **progress-bar:** allow only number for both attributes ([d5711f4](https://github.com/ovh/design-system/commit/d5711f472ebf3441e3f5c91df2562b8be09c94c1))
* **select:** fix broken e2e screenshot tests ([02e409e](https://github.com/ovh/design-system/commit/02e409e7bdac8d4508f4e9e9d0775043087566cb))


### Features

* **input:** add prefix value ([ba33fe7](https://github.com/ovh/design-system/commit/ba33fe768c7d6a387a4cb55dd2822e2c799e6445))
* **input:** prefix storybook ([76ecf23](https://github.com/ovh/design-system/commit/76ecf23502fe4cf1be5089f8b88605a1a1472c8f))
* **phone-number:** add countries in component ([9da57dd](https://github.com/ovh/design-system/commit/9da57dd4f5616c4effe92b7d72438adf48741ef0))
* **phone-number:** add countries in component ([3c62dc4](https://github.com/ovh/design-system/commit/3c62dc408eec5c65bb6840f10fbbfdacbb660be3))
* **phone-number:** add countries in component ([808340b](https://github.com/ovh/design-system/commit/808340b201d046326d82c1e218f91d1c276dedcb))
* **phone-number:** add countries in component ([d5987bf](https://github.com/ovh/design-system/commit/d5987bf731305aec33f194e42e50320338e03f7c))
* **phone-number:** add countries in component ([9445b1c](https://github.com/ovh/design-system/commit/9445b1c68e4314ae2066af225e4bf09a4dd0d13d))
* **phone-number:** add countries in component ([32b79cf](https://github.com/ovh/design-system/commit/32b79cfa40296125dcd962bd47f49e93db85e47d))
* **phone-number:** add countries in component ([51308cc](https://github.com/ovh/design-system/commit/51308cc15a7c8c760b0d1d108fbefc97ef2735a6))
* **phone-number:** add new iso code & file trad for countries ([f018ef5](https://github.com/ovh/design-system/commit/f018ef54ef63a04a25ba7e63b2ef64d4c9bb7668))
* **phone-number:** add prefix input & selected label ([3cecc62](https://github.com/ovh/design-system/commit/3cecc629c3495f6c4bd8ef51d3ad3d2e88498d3c))
* **phone-number:** add test & validation value ([cabfeaa](https://github.com/ovh/design-system/commit/cabfeaa821644068fb506a30914bc0968ed592c6))
* **phone-number:** implem validation & placehoslder ([bfb2e74](https://github.com/ovh/design-system/commit/bfb2e743cb078239c2fa34b3d845ad02b7fa233c))
* **phone-number:** import translate file ([55b0990](https://github.com/ovh/design-system/commit/55b0990fae14da5f511df160742bec51c55c1c87))
* **phone-number:** step 1 init component with simple input ([c60e794](https://github.com/ovh/design-system/commit/c60e7940795ccf546463a8b21f4682713a1c9dba))
* **phone-number:** step 1 init component with simple input ([0fe9f5c](https://github.com/ovh/design-system/commit/0fe9f5c260ff44909aa0755ca522737750c60fd8))
* **select:** add slot selectedLabel ([#197](https://github.com/ovh/design-system/issues/197)) ([f8829b2](https://github.com/ovh/design-system/commit/f8829b23a1e3a2c9fa93c443a3baa32ecd670a9a))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.0.1](https://ovh.github.io/design-system/v16.0.1/?path=/docs/design-system-changelog--page) (2023-09-12)
[compare](https://github.com/ovh/design-system/compare/v16.0.0...v16.0.1)

**Note:** Version bump only for package ods







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [16.0.0](https://ovh.github.io/design-system/v16.0.0/?path=/docs/design-system-changelog--page) (2023-09-11)
[compare](https://github.com/ovh/design-system/compare/v15.0.1...v16.0.0)

### Bug Fixes

* **arch:** update path to new packages name ([8679f03](https://github.com/ovh/design-system/commit/8679f0388ac609c775b1c2c86e272a2bbefa50bc))
* **button:** align content center ([cfd3da7](https://github.com/ovh/design-system/commit/cfd3da7a675bb32604b80cd1ea0debc51aeebf39))
* **button:** change textalign to text-align ([b2ef007](https://github.com/ovh/design-system/commit/b2ef0074fa583f865e8f5ab1d0d1b8f5a17aaccb))
* **button:** vertical align + test disabled ([268eeb2](https://github.com/ovh/design-system/commit/268eeb2f52b6ebe031a77b55eabd3e17991f0f73))
* **checkbox:** build packages/ & review ([a543a0c](https://github.com/ovh/design-system/commit/a543a0c7c1e8a1c5106fa2eee4161aec13a665b6))
* **checkbox:** enum name ([bf122ea](https://github.com/ovh/design-system/commit/bf122ea178444d9d2905915f0eade7b18fc9527b))
* **checkbox:** export & dependencies ([091dd6d](https://github.com/ovh/design-system/commit/091dd6d590ecce19d5afe72d8a77d537d57b391a))
* **checkbox:** rebase ([3cdb5df](https://github.com/ovh/design-system/commit/3cdb5df5a8e7723285fb894b648379d6ff6bfd8d))
* **checkbox-button:** fix sizes of boxes ([4df8f9e](https://github.com/ovh/design-system/commit/4df8f9ea7a98ac02cbd72d005d274e6959dcf1e3))
* **checkbox-button:** fix sizing in theme ([9bc48db](https://github.com/ovh/design-system/commit/9bc48db6948a9983d8a5f738b97b771d47459430))
* **ci:** force exact version on release ([4c70691](https://github.com/ovh/design-system/commit/4c70691885716c625d7b940961ebc6755823c645))
* **clipboard:** css cursor + border ([201c1e1](https://github.com/ovh/design-system/commit/201c1e1abdaec993919172b4af969b70d12bcec2))
* **clipboard:** disabled cursor ([fb65c8a](https://github.com/ovh/design-system/commit/fb65c8ab851718e0a6e2e0b8ad7b36098ca0fabd))
* **clipboard:** input cursor icon copy ([75f2762](https://github.com/ovh/design-system/commit/75f27620c1d6c69da558b2bf2e741131c5105268))
* **clipboard:** reject error ([d80f651](https://github.com/ovh/design-system/commit/d80f651c0ea87037069fd553b2bd5a3ef52ea525))
* **clipboard:** review ([32468dc](https://github.com/ovh/design-system/commit/32468dcec0c3c5d0084bddc6a0cf241f7c550c0e))
* **clipboard:** review PR ([7f0c918](https://github.com/ovh/design-system/commit/7f0c9183132b33a0c237af28f6b4448a502f7f86))
* **clipboard:** typo + add test keyboard ([db341cd](https://github.com/ovh/design-system/commit/db341cd7840da60aa34351da27435b833c245d69))
* **code:** display error when inserting long code inputs ([#138](https://github.com/ovh/design-system/issues/138)) ([b12fd47](https://github.com/ovh/design-system/commit/b12fd470f7e6fe0dfb6d4aa1c4c8002d76b27ac3))
* **code:** fix tests ([71a571a](https://github.com/ovh/design-system/commit/71a571ab98db626cc39086714714b36fb25cfaed))
* **components:** remove message built files ([7b6dd09](https://github.com/ovh/design-system/commit/7b6dd09cdb280b0e5828bfbc67cf8da99bdf9140))
* **doc:** put back file used in doc until storybook update ([983dd37](https://github.com/ovh/design-system/commit/983dd377abc83473afd3dfb214f38df9e47d56ee))
* **flag:** remove unnecessary instructions ([f740f78](https://github.com/ovh/design-system/commit/f740f789ea04807451c41f39a6dd770ca9919242))
* **flags:** add missing unia && fix doc ([9d6e264](https://github.com/ovh/design-system/commit/9d6e264a416e9b7f339f675e3ff3d2bba438a299))
* **input:** addressing changes ([4e98500](https://github.com/ovh/design-system/commit/4e98500f5653352e23f72da35413b84db3ee9370))
* **input:** block actions if disabled ([4f5b2ee](https://github.com/ovh/design-system/commit/4f5b2ee9718bb95c979b6d20b8145920ffd65a2c))
* **link:** focus box on safari ([420fdd7](https://github.com/ovh/design-system/commit/420fdd7c9ee84101bb5f5577709f852ffe48158a))
* **menu:** correct import type ([97b975e](https://github.com/ovh/design-system/commit/97b975eb196b0179fec508f1e467dc30f15a71a2))
* **menu:** removed core for subcomponent and fix imports ([94070ab](https://github.com/ovh/design-system/commit/94070ab65242a7e5f92fe667d748f95ddd7a85f3))
* **popover:** rm setAnchorMargin & add inline-flex to trigger ([5c4a214](https://github.com/ovh/design-system/commit/5c4a214ec27326890c19443a6d23ab641c656081))
* **quantity:** set button width ([92715a9](https://github.com/ovh/design-system/commit/92715a9993baa153075d46a581a37c1d5b1005fa))
* **radio:** fix type of radioGroup and check for el ([2122fb4](https://github.com/ovh/design-system/commit/2122fb4101cbf03f0f5d81ca97f83a9f6f5826df))
* **radio:** replace ods logger on index dev file ([1cdaf65](https://github.com/ovh/design-system/commit/1cdaf65c3f821f224605dee503cc175042f8e90d))
* **radio:** review ([3a7c79b](https://github.com/ovh/design-system/commit/3a7c79bf42a3d8c78104a6b1c825bcd548fad4f7))
* **radio-group:** fix undefined error onDestroy ([91b88c3](https://github.com/ovh/design-system/commit/91b88c316074960035f198ffe2a2f23508d08d4c))
* **range:** fix css ([398dfc3](https://github.com/ovh/design-system/commit/398dfc38d6827dda91c33f262a4e9f551a5e082a))
* **range:** use flex by default ([0b043ae](https://github.com/ovh/design-system/commit/0b043aeed892b84518f33fd549352fcfbb5dc3fd))
* **reports:** remove packages-new specific paths ([8c51c26](https://github.com/ovh/design-system/commit/8c51c26f13a2f1df5c005ad4d98f9ecafb6725bc))
* **search-bar:** button disabled + contrasted ([9352323](https://github.com/ovh/design-system/commit/93523234810857d58f726758b59ab85a12aac9c6))
* **search-bar:** css ajustement + story remove control value ([12e65a0](https://github.com/ovh/design-system/commit/12e65a030535849e0d5f0b9faafde15c667f61cf))
* **search-bar:** icon color in contrasted ([838f284](https://github.com/ovh/design-system/commit/838f2843866622a1064eda606062d49990fc2564))
* **search-bar:** remove clipboard file + dep icon ([a7bd479](https://github.com/ovh/design-system/commit/a7bd479c2db047bd2e42cc33087b96d2164da1bd))
* **search-bar:** story title + select disabled + button align ([029d392](https://github.com/ovh/design-system/commit/029d39238699e9b20f4ef78bc8060c88f8d01899))
* **search-bar:** test screenshot ([c70e3d7](https://github.com/ovh/design-system/commit/c70e3d765ae1e0377b0c451cfa44991841e7cb90))
* **searchbar:** align surface on select ([4384a59](https://github.com/ovh/design-system/commit/4384a59c4e99912d3f312733edc71ed09069c65d))
* **searchbar:** fix rebase ([1711181](https://github.com/ovh/design-system/commit/171118171388429c1f7b2b0079757e0f1f1f50db))
* **searchbar:** pr comment ([9b04b49](https://github.com/ovh/design-system/commit/9b04b49ca5016b2b39e73937bec19d95dcf29a71))
* **searchbar:** specfications ([f50b75f](https://github.com/ovh/design-system/commit/f50b75f888b4ad67f2d2b97b42dbe33d0244b5d9))
* **searchbar:** width ([02f8440](https://github.com/ovh/design-system/commit/02f8440d313620579feb4e5096bd61c771ebaf1d))
* **select:** navigation with keys improvments ([#118](https://github.com/ovh/design-system/issues/118)) ([4ffbec3](https://github.com/ovh/design-system/commit/4ffbec3066838f3531d7f8b42a21261f1d2d15fd))
* **select:** remove duplicated dependency ([b7703c0](https://github.com/ovh/design-system/commit/b7703c07c25874c0e0f95402f7cd62f8e161b6b0))
* **select:** remove useless comments ([bc14cb9](https://github.com/ovh/design-system/commit/bc14cb9d8cd41db04976b45a0e873a522883df36))
* **select:** surface width no longer the same than trigger ([910816f](https://github.com/ovh/design-system/commit/910816f1d9093a6a5deca2ea34a82a95cff75ccd))
* **select:** unselect non validated option after closing ([ac49716](https://github.com/ovh/design-system/commit/ac497165a0e88907c4d2c1774ec8dd3aab3a3ba6))
* **skeleton:** display size correctly when inline ([cd062dc](https://github.com/ovh/design-system/commit/cd062dcbdf1f74600ba16e453708cf15013a4859))
* **storybook:** add public assets to build ([3def7b0](https://github.com/ovh/design-system/commit/3def7b0e06b7bfd012b048a50f5f6126a90e15ae))
* **storybook:** prevent static dir to be ignored on build ([#128](https://github.com/ovh/design-system/issues/128)) ([3b66608](https://github.com/ovh/design-system/commit/3b66608e5779fad5579ac3bcc275a3906ec14877))
* **switch:** export switchItem ([01cf79e](https://github.com/ovh/design-system/commit/01cf79e1f87c155184218e2ce47c95f4da6c6933))
* **tabs:** theming import ([4286a54](https://github.com/ovh/design-system/commit/4286a541c47e3a23dbc241c5ef19335d7b7da3b0))
* **tabs:** use correct theming dependency ([b31672a](https://github.com/ovh/design-system/commit/b31672aea674bc2f5831b9b678f36c83b67d079a))
* **toggle:** fix default attributes import ([e3205ff](https://github.com/ovh/design-system/commit/e3205ff158b031a731771bb709ca2592a9ec9955))
* **toggle:** import type ([dc122bf](https://github.com/ovh/design-system/commit/dc122bfecdec3f9fcfad23b177b8ebb1322417aa))


### Features

* **accordion:** move && simplify component accordion ([ffc42c0](https://github.com/ovh/design-system/commit/ffc42c0622f3663ab7a37dfe92d09cb9de683771))
* **arch:** move && simplify component breadcrumb ([f376a1c](https://github.com/ovh/design-system/commit/f376a1c5959d8261423fca3448c1ae8a076ac6c6))
* **arch:** move && simplify component button ([a337fe9](https://github.com/ovh/design-system/commit/a337fe900ceffc0fd81a54818719aa6f2d003d62))
* **arch:** move && simplify component cart ([9d3dca7](https://github.com/ovh/design-system/commit/9d3dca75ddc44497750bfa497289f1d7b1d4c508))
* **arch:** move && simplify component chip ([b0c1366](https://github.com/ovh/design-system/commit/b0c1366d6434f784ddd626bd2332cdd8a414a54c))
* **arch:** move && simplify component clipboard ([e99f700](https://github.com/ovh/design-system/commit/e99f7000b2bc0c8cb60435b9a2cf89b5935ca55a))
* **arch:** move && simplify component code ([cdb5a14](https://github.com/ovh/design-system/commit/cdb5a146cbc7fef4b5556551d700ab71d28a41f0))
* **arch:** move && simplify component collapsible ([4c1dfec](https://github.com/ovh/design-system/commit/4c1dfec88854d5271b2025422d62f80588436f5f))
* **arch:** move && simplify component content-addon ([9740a27](https://github.com/ovh/design-system/commit/9740a27015d79d7cf8dce65896407a23de86d1ba))
* **arch:** move && simplify component form field ([0961ca1](https://github.com/ovh/design-system/commit/0961ca115b0f0021ebdf0df8e92d2ee5fab9fa80))
* **arch:** move && simplify component icon ([1ed99a0](https://github.com/ovh/design-system/commit/1ed99a066bd7900a41cb2ec1bf804a08445cad68))
* **arch:** move && simplify component input ([aaea32b](https://github.com/ovh/design-system/commit/aaea32bd09e70cf9beff0c18859b20aa3ac82314))
* **arch:** move && simplify component link ([034064d](https://github.com/ovh/design-system/commit/034064d11680a0151398e8ed3dd6989552b92ffc))
* **arch:** move && simplify component Modal ([d2b50f1](https://github.com/ovh/design-system/commit/d2b50f197cac92c613ec3ba5d87aa60247b21413))
* **arch:** move && simplify component Modal ([639470a](https://github.com/ovh/design-system/commit/639470aacbf088aea9cd04f6e4ccf96a3eae5dfa))
* **arch:** move && simplify component pagination ([f4a7838](https://github.com/ovh/design-system/commit/f4a783861e000e2c7fe4ba6bd577cb47e0175760))
* **arch:** move && simplify component password ([f3e9d0a](https://github.com/ovh/design-system/commit/f3e9d0aab81fb22e05146307e2da849501899196))
* **arch:** move && simplify component popover ([e5df571](https://github.com/ovh/design-system/commit/e5df57162986c7119484246417e77a04cc8be7d5))
* **arch:** move && simplify component progress-bar ([4909007](https://github.com/ovh/design-system/commit/490900705687b0fa95b37274980a529fffcf9365))
* **arch:** move && simplify component progress-bar ([d364278](https://github.com/ovh/design-system/commit/d364278ab146632905487ebfe9b06abadb39296f))
* **arch:** move && simplify component progress-bar ([0ffc684](https://github.com/ovh/design-system/commit/0ffc68497ffd120e7569bc72fa4cd5c3321c7d1d))
* **arch:** move && simplify component quantity ([2d0ac2b](https://github.com/ovh/design-system/commit/2d0ac2bd36547f160daab7a18e1b5d29e79e7289))
* **arch:** move && simplify component select ([742d2b1](https://github.com/ovh/design-system/commit/742d2b1f136f25284cc87b7e3fbf8e3fa91b24fd))
* **arch:** move && simplify component skeleton ([d6e198b](https://github.com/ovh/design-system/commit/d6e198bd2d0550cd2576c93c413013e4105005ea))
* **arch:** move && simplify component skeleton ([2003153](https://github.com/ovh/design-system/commit/200315337cd7ab3cafc1163c654b6fccf10f5edb))
* **arch:** move && simplify component skeleton - review ([e310c7d](https://github.com/ovh/design-system/commit/e310c7d829bfd7a33f2e5dde6ad61a44f1265507))
* **arch:** move && simplify component spinner ([86b49ca](https://github.com/ovh/design-system/commit/86b49ca23053c70d1f4f18aa8126dda61c1867a0))
* **arch:** move && simplify component Tabs ([a13bab7](https://github.com/ovh/design-system/commit/a13bab7a8be5718a278912582df5ca480b341b8f))
* **arch:** move && simplify component Tabs ([2f54cd7](https://github.com/ovh/design-system/commit/2f54cd7c043f4b1d5090c87ec641eb14316db229))
* **arch:** move && simplify component Tabs ([cf234a7](https://github.com/ovh/design-system/commit/cf234a794a987ea269e306a110f0c561c7eb19fc))
* **arch:** move && simplify component tooltip ([b64338e](https://github.com/ovh/design-system/commit/b64338e78a8d5b1e0159059ecbd37619a8456851))
* **arch:** move cdk ([1e437e2](https://github.com/ovh/design-system/commit/1e437e2b1c5d34857cc29706dedfa50cd6ed133f))
* **button:** add textAlign attribute ([23f544d](https://github.com/ovh/design-system/commit/23f544d821d7b8e62eb68d8a1d1879c9e022aa38))
* **clipboard:** add test ([9113322](https://github.com/ovh/design-system/commit/9113322b70556e4626e308134b1f517472f3fcaf))
* **clipboard:** generate component ([9acd899](https://github.com/ovh/design-system/commit/9acd899d15d50907ed714f5554a86672b8c442e5))
* **deps:** use fixed library version ([116d583](https://github.com/ovh/design-system/commit/116d58306b5c528f127dcfa1a1043507f2ec5141))
* **divider:** move && simplify component divider ([3b50868](https://github.com/ovh/design-system/commit/3b508685f83f95d06741ad89b59cc6df3c9caf9b))
* **flag:** migrate to new archi ([5e0ea78](https://github.com/ovh/design-system/commit/5e0ea7801aa7404a9e2dc726be254d53353b649c))
* **menu:** add menu on new archi ([4456898](https://github.com/ovh/design-system/commit/4456898d12ad03f37facb447cf30869361884f61))
* **modal:** addressing changes ([b1f8f95](https://github.com/ovh/design-system/commit/b1f8f959da587003575fb8d1e98ad35f620966e1))
* **modal:** addressing changes ([34b77a4](https://github.com/ovh/design-system/commit/34b77a43f79fc743d12d4c25e83fde9fe209954e))
* **modal:** addressing changes ([c697225](https://github.com/ovh/design-system/commit/c69722570636360651f58c6679cfd857d2fd518d))
* **modal:** addressing changes ([9634396](https://github.com/ovh/design-system/commit/9634396fe49c148fc14fe3ef1928c359c82a47d0))
* **modal:** correcting excluded dependencies ([577e799](https://github.com/ovh/design-system/commit/577e799a9c2f0021aa1df5333734cd0ff6bb16ad))
* **modal:** fixing Storybook & addressing changes ([e6b576f](https://github.com/ovh/design-system/commit/e6b576f9e7666632b7c8f97fe9dd30b3389ad7f8))
* **modal:** multi-modal handle, inert elements & circle button ([384947a](https://github.com/ovh/design-system/commit/384947af7a5c6f276ad5fef872d2b6ccc5bf6abd))
* **modal:** proper rebase ([2d9b08e](https://github.com/ovh/design-system/commit/2d9b08e92efd1c312645ed7e7608b0d8f06fdb92))
* **modal:** rendering & testing component ([4a9e478](https://github.com/ovh/design-system/commit/4a9e47865573b521f307d3009b791b4381869bf0))
* **modal:** testing & storybook ([8040dca](https://github.com/ovh/design-system/commit/8040dca499edc706187408aa84eab7c93788b2b2))
* **radio-button:** move && simplify component radio-button ([0712ca1](https://github.com/ovh/design-system/commit/0712ca101f237f359eaab6cd49bdef9c14ab2a72))
* **range:** move to new archi ([ad0875f](https://github.com/ovh/design-system/commit/ad0875f5a40e5d97f6dca346e1800d9702bc85a1))
* **search-bar:** generate components ([e37b0c3](https://github.com/ovh/design-system/commit/e37b0c39d76db081522011ea7fdcc624911b943c))
* **search-bar:** implem V1 ([ff686d6](https://github.com/ovh/design-system/commit/ff686d6777d37a4520dee187c056d0e489782a3f))
* **searchbar:** end storybook + test ([1352c8a](https://github.com/ovh/design-system/commit/1352c8a729922af7bb4a2efd388e15427b9e774f))
* **tile:** move && simplify component tile ([23fc059](https://github.com/ovh/design-system/commit/23fc059892e0fca6465731b8bbc590cb630c7382))
* **toggle:** migrate to new archi ([6fb9a0d](https://github.com/ovh/design-system/commit/6fb9a0d024ab21c26fea87659e5219d810960d66))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [15.0.1](https://ovhcloud.design/v15.0.1/?path=/docs/design-system-changelog--page) (2023-07-26)
[compare](https://github.com/ovh/design-system/compare/v15.0.0...v15.0.1)

### Bug Fixes

* **release:** remove private on new packages to publish ([0cd6ed9](https://github.com/ovh/design-system/commit/0cd6ed9049498d7697a51829b58d7620f946c94f))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [15.0.0](https://ovhcloud.design/v15.0.0/?path=/docs/design-system-changelog--page) (2023-07-25)
[compare](https://github.com/ovh/design-system/compare/v13.0.1...v15.0.0)

### Bug Fixes

* **checkbox-button:** add aspect ratio to 1 ([#79](https://github.com/ovh/design-system/issues/79)) ([cc72649](https://github.com/ovh/design-system/commit/cc726492ed0180456c39207ad4bcd31f72094908))
* **generator:** generate good version ([27207e6](https://github.com/ovh/design-system/commit/27207e681649827b3e69500b1473e266aad6f3d8))
* **input:** set cursor to not-allowed when disabled ([#101](https://github.com/ovh/design-system/issues/101)) ([43ee887](https://github.com/ovh/design-system/commit/43ee88707f82557c1a1cd78e207870cf5780e5c0))
* **link:** add missing color for active state ([#81](https://github.com/ovh/design-system/issues/81)) ([0ed10dc](https://github.com/ovh/design-system/commit/0ed10dc8a3d5b7875bacfe20bacd9d0333b6d6e6))
* **link:** fix link host container size to match its content ([#82](https://github.com/ovh/design-system/issues/82)) ([d9b3900](https://github.com/ovh/design-system/commit/d9b390035b07f1b88d83bb0d007398b469f8ecc1))
* **password:** use latest release version ([666b4db](https://github.com/ovh/design-system/commit/666b4db24ee102ba20c63bea61708710061e5183))
* **popover:** change toBeFalse to toBe false in testing ([#86](https://github.com/ovh/design-system/issues/86)) ([b2e74b7](https://github.com/ovh/design-system/commit/b2e74b7648b7b6e0ecae89493c0c4832962f6abe))
* **radio:** disable tabindex on disabled radio ([#95](https://github.com/ovh/design-system/issues/95)) ([cfb31b6](https://github.com/ovh/design-system/commit/cfb31b696b0c75e7f0256ca87c74995267df348a))
* **storybook:** change Tile attribute interactive to hoverable ([#107](https://github.com/ovh/design-system/issues/107)) ([2fc6eee](https://github.com/ovh/design-system/commit/2fc6eeebc612e325e033e5f1ac0f95cec2ad7e29))
* **textarea:** remove 100% width when flex is removed ([#83](https://github.com/ovh/design-system/issues/83)) ([5a4563e](https://github.com/ovh/design-system/commit/5a4563ebf5f4df54dfab4d9c88ae3801c84e82bd))
* **tile:** add hoverable attribute to avoid double focus in radio when interactive ([#80](https://github.com/ovh/design-system/issues/80)) ([9429178](https://github.com/ovh/design-system/commit/942917827474b7a0524ea4d26fbaade95baee55f))
* force @types/ws version ([#76](https://github.com/ovh/design-system/issues/76)) ([30ad527](https://github.com/ovh/design-system/commit/30ad527cdae4718e08cd11bc82a5ac79646a81f0))


### Features

* **text:** export attribute interface ([3c0f1c6](https://github.com/ovh/design-system/commit/3c0f1c6c9c72ad345953da2a1069f57c77671688))
* update whats new page ([#102](https://github.com/ovh/design-system/issues/102)) ([27aba78](https://github.com/ovh/design-system/commit/27aba78e296f7ba3d450595b31a4c3e5406a20b3))
* **cdk:** manage edge cases ([#99](https://github.com/ovh/design-system/issues/99)) ([fa88aee](https://github.com/ovh/design-system/commit/fa88aeeff3639013c36b3c9af7181a3654f26c32))
* **form-field:** rendering, styling, testing and documenting ([#97](https://github.com/ovh/design-system/issues/97)) ([d249998](https://github.com/ovh/design-system/commit/d249998b90e08280d2e37c04606f3a9419b026ec))
* **icon:** add hover style ([#77](https://github.com/ovh/design-system/issues/77)) ([d4b221f](https://github.com/ovh/design-system/commit/d4b221ff82a67b63b2eba89022bb9dff9b0d12ec))
* **input-v1:** upgrading component ([#71](https://github.com/ovh/design-system/issues/71)) ([5609893](https://github.com/ovh/design-system/commit/56098935d29be39dbc9a763fb0b92396544f4d44))
* **location-tile:** deprecated component ([#92](https://github.com/ovh/design-system/issues/92)) ([d7d653e](https://github.com/ovh/design-system/commit/d7d653e4f6527808def180f848d9aee0c8112208))
* **popover:** add new component popover ([#14](https://github.com/ovh/design-system/issues/14)) ([507155c](https://github.com/ovh/design-system/commit/507155c4961c69adc5f98fd7c7c85518c483893f))
* **storybook:** add deprecated and new badge ([#91](https://github.com/ovh/design-system/issues/91)) ([e6c82fb](https://github.com/ovh/design-system/commit/e6c82fb325de45fbbaf32d281e8826f2d4ca5478))
* add progress bar component ([#62](https://github.com/ovh/design-system/issues/62)) ([9d35e79](https://github.com/ovh/design-system/commit/9d35e79edf6a9680775d20ab8e44884ff7d8d381))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [14.1.1](https://ovhcloud.design/v14.1.1/?path=/docs/design-system-changelog--page) (2023-07-19)
[compare](https://github.com/ovh/design-system/compare/v14.1.0...v14.1.1)

### Bug Fixes

* **input:** set cursor to not-allowed when disabled ([#101](https://github.com/ovh/design-system/issues/101)) ([43ee887](https://github.com/ovh/design-system/commit/43ee88707f82557c1a1cd78e207870cf5780e5c0))


### Features

* update whats new page ([#102](https://github.com/ovh/design-system/issues/102)) ([a3a5fb7](https://github.com/ovh/design-system/commit/a3a5fb734815e21050de820a1964b4781323fe6b))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [14.1.0](https://ovhcloud.design/v14.1.0/?path=/docs/design-system-changelog--page) (2023-07-18)
[compare](https://github.com/ovh/design-system/compare/v13.0.1...v14.1.0)

### Bug Fixes

* **checkbox-button:** add aspect ratio to 1 ([#79](https://github.com/ovh/design-system/issues/79)) ([cc72649](https://github.com/ovh/design-system/commit/cc726492ed0180456c39207ad4bcd31f72094908))
* **generator:** generate good version ([27207e6](https://github.com/ovh/design-system/commit/27207e681649827b3e69500b1473e266aad6f3d8))
* **link:** add missing color for active state ([#81](https://github.com/ovh/design-system/issues/81)) ([0ed10dc](https://github.com/ovh/design-system/commit/0ed10dc8a3d5b7875bacfe20bacd9d0333b6d6e6))
* **link:** fix link host container size to match its content ([#82](https://github.com/ovh/design-system/issues/82)) ([d9b3900](https://github.com/ovh/design-system/commit/d9b390035b07f1b88d83bb0d007398b469f8ecc1))
* **popover:** change toBeFalse to toBe false in testing ([#86](https://github.com/ovh/design-system/issues/86)) ([b2e74b7](https://github.com/ovh/design-system/commit/b2e74b7648b7b6e0ecae89493c0c4832962f6abe))
* **radio:** disable tabindex on disabled radio ([#95](https://github.com/ovh/design-system/issues/95)) ([cfb31b6](https://github.com/ovh/design-system/commit/cfb31b696b0c75e7f0256ca87c74995267df348a))
* **textarea:** remove 100% width when flex is removed ([#83](https://github.com/ovh/design-system/issues/83)) ([5a4563e](https://github.com/ovh/design-system/commit/5a4563ebf5f4df54dfab4d9c88ae3801c84e82bd))
* **tile:** add hoverable attribute to avoid double focus in radio when interactive ([#80](https://github.com/ovh/design-system/issues/80)) ([9429178](https://github.com/ovh/design-system/commit/942917827474b7a0524ea4d26fbaade95baee55f))
* force @types/ws version ([#76](https://github.com/ovh/design-system/issues/76)) ([30ad527](https://github.com/ovh/design-system/commit/30ad527cdae4718e08cd11bc82a5ac79646a81f0))


### Features

* **cdk:** manage edge cases ([#99](https://github.com/ovh/design-system/issues/99)) ([fa88aee](https://github.com/ovh/design-system/commit/fa88aeeff3639013c36b3c9af7181a3654f26c32))
* **form-field:** rendering, styling, testing and documenting ([#97](https://github.com/ovh/design-system/issues/97)) ([d249998](https://github.com/ovh/design-system/commit/d249998b90e08280d2e37c04606f3a9419b026ec))
* **icon:** add hover style ([#77](https://github.com/ovh/design-system/issues/77)) ([d4b221f](https://github.com/ovh/design-system/commit/d4b221ff82a67b63b2eba89022bb9dff9b0d12ec))
* **input-v1:** upgrading component ([#71](https://github.com/ovh/design-system/issues/71)) ([5609893](https://github.com/ovh/design-system/commit/56098935d29be39dbc9a763fb0b92396544f4d44))
* **location-tile:** deprecated component ([#92](https://github.com/ovh/design-system/issues/92)) ([d7d653e](https://github.com/ovh/design-system/commit/d7d653e4f6527808def180f848d9aee0c8112208))
* **popover:** add new component popover ([#14](https://github.com/ovh/design-system/issues/14)) ([507155c](https://github.com/ovh/design-system/commit/507155c4961c69adc5f98fd7c7c85518c483893f))
* **storybook:** add deprecated and new badge ([#91](https://github.com/ovh/design-system/issues/91)) ([e6c82fb](https://github.com/ovh/design-system/commit/e6c82fb325de45fbbaf32d281e8826f2d4ca5478))
* add progress bar component ([#62](https://github.com/ovh/design-system/issues/62)) ([9d35e79](https://github.com/ovh/design-system/commit/9d35e79edf6a9680775d20ab8e44884ff7d8d381))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [14.0.1](https://ovhcloud.design/v14.0.1/?path=/docs/design-system-changelog--page) (2023-06-28)
[compare](https://github.com/ovh/design-system/compare/v14.0.0...v14.0.1)

### Bug Fixes

* **dependencies:** rm multi dep since version tags wont update ([#88](https://github.com/ovh/design-system/issues/88)) ([9e3f2c8](https://github.com/ovh/design-system/commit/9e3f2c8af4afb7bad17985ca1cdc000533b23c2f))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [14.0.0](https://ovhcloud.design/v14.0.0/?path=/docs/design-system-changelog--page) (2023-06-28)
[compare](https://github.com/ovh/design-system/compare/v13.0.1...v14.0.0)

### Bug Fixes

* **checkbox-button:** add aspect ratio to 1 ([#79](https://github.com/ovh/design-system/issues/79)) ([cc72649](https://github.com/ovh/design-system/commit/cc726492ed0180456c39207ad4bcd31f72094908))
* **generator:** generate good version ([27207e6](https://github.com/ovh/design-system/commit/27207e681649827b3e69500b1473e266aad6f3d8))
* **link:** add missing color for active state ([#81](https://github.com/ovh/design-system/issues/81)) ([0ed10dc](https://github.com/ovh/design-system/commit/0ed10dc8a3d5b7875bacfe20bacd9d0333b6d6e6))
* **link:** fix link host container size to match its content ([#82](https://github.com/ovh/design-system/issues/82)) ([d9b3900](https://github.com/ovh/design-system/commit/d9b390035b07f1b88d83bb0d007398b469f8ecc1))
* **popover:** change toBeFalse to toBe false in testing ([#86](https://github.com/ovh/design-system/issues/86)) ([b2e74b7](https://github.com/ovh/design-system/commit/b2e74b7648b7b6e0ecae89493c0c4832962f6abe))
* **textarea:** remove 100% width when flex is removed ([#83](https://github.com/ovh/design-system/issues/83)) ([5a4563e](https://github.com/ovh/design-system/commit/5a4563ebf5f4df54dfab4d9c88ae3801c84e82bd))
* **tile:** add hoverable attribute to avoid double focus in radio when interactive ([#80](https://github.com/ovh/design-system/issues/80)) ([9429178](https://github.com/ovh/design-system/commit/942917827474b7a0524ea4d26fbaade95baee55f))
* force @types/ws version ([#76](https://github.com/ovh/design-system/issues/76)) ([30ad527](https://github.com/ovh/design-system/commit/30ad527cdae4718e08cd11bc82a5ac79646a81f0))


### Features

* **icon:** add hover style ([#77](https://github.com/ovh/design-system/issues/77)) ([d4b221f](https://github.com/ovh/design-system/commit/d4b221ff82a67b63b2eba89022bb9dff9b0d12ec))
* **input-v1:** upgrading component ([#71](https://github.com/ovh/design-system/issues/71)) ([5609893](https://github.com/ovh/design-system/commit/56098935d29be39dbc9a763fb0b92396544f4d44))
* **popover:** add new component popover ([#14](https://github.com/ovh/design-system/issues/14)) ([507155c](https://github.com/ovh/design-system/commit/507155c4961c69adc5f98fd7c7c85518c483893f))
* add progress bar component ([#62](https://github.com/ovh/design-system/issues/62)) ([9d35e79](https://github.com/ovh/design-system/commit/9d35e79edf6a9680775d20ab8e44884ff7d8d381))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [13.0.1](https://ovhcloud.design/v13.0.1/?path=/docs/design-system-changelog--page) (2023-06-09)
[compare](https://github.com/ovh/design-system/compare/v13.0.0...v13.0.1)

### Bug Fixes

* **testing:** re add jest-transform-stub into dep ([2b3a287](https://github.com/ovh/design-system/commit/2b3a287d58c8ca453d31f2c8002f820aa8d6cef1))
* **testing:** re add jest-transform-stub into dep ([db98801](https://github.com/ovh/design-system/commit/db9880163a7bdaceecbf054f39b6ebad01c2f13a))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [13.0.0](https://ovhcloud.design/v13.0.0/?path=/docs/design-system-changelog--page) (2023-06-08)
[compare](https://github.com/ovh/design-system/compare/v12.1.3...v13.0.0)

### Bug Fixes

* **breadcrumb:** ensure alignement with empty text ([#65](https://github.com/ovh/design-system/issues/65)) ([d3a91e3](https://github.com/ovh/design-system/commit/d3a91e320b31b306cbd1980b1877e7fe63fe48b7))
* align icon and label in link ([#64](https://github.com/ovh/design-system/issues/64)) ([4c7c0ce](https://github.com/ovh/design-system/commit/4c7c0cee2d1fe35ac7c5388c70d1a8aba16311aa))
* **chip:** apply style on element focus ([#60](https://github.com/ovh/design-system/issues/60)) ([a0229fc](https://github.com/ovh/design-system/commit/a0229fc8f38a91ff69b956dfbaf6e86927270321))
* **generator:** remove duplicate import + prepend import in file ([#40](https://github.com/ovh/design-system/issues/40)) ([780ee66](https://github.com/ovh/design-system/commit/780ee663cea6772f4b1355bee5f13a8c12d8d6f8))
* **input:** not emit odsValueChange on init component ([#48](https://github.com/ovh/design-system/issues/48)) ([f789285](https://github.com/ovh/design-system/commit/f78928508ce82a0b6e61e2f4e34009890bc0c240))
* **link:** set href & target optionnal ([#61](https://github.com/ovh/design-system/issues/61)) ([4943d84](https://github.com/ovh/design-system/commit/4943d84e0650acc0800cd011b2d44989225e4b6e))
* **ods:** set node-sass to v8 to avoid install issue with M1 mac ([#39](https://github.com/ovh/design-system/issues/39)) ([31c5c3e](https://github.com/ovh/design-system/commit/31c5c3e5ddee6564b3836eb5b6d86f09ae4336d5))
* **select:** check outside click target inside its DOM ([#51](https://github.com/ovh/design-system/issues/51)) ([fce9049](https://github.com/ovh/design-system/commit/fce904978088f8405899575d39f2f629482e0bc9))


### Features

* **doc:** add whats new and migration guide ([#66](https://github.com/ovh/design-system/issues/66)) ([ddfea04](https://github.com/ovh/design-system/commit/ddfea04c8b7a0b9d05cd882a9d21dd10e0546f30))
* add circle shape in button ([#42](https://github.com/ovh/design-system/issues/42)) ([d024fae](https://github.com/ovh/design-system/commit/d024faecdda903d291a5bb88323c3dc4da3a5a0e))
* **component.pagination:** Add new component pagination ([#10](https://github.com/ovh/design-system/issues/10)) ([3b4c767](https://github.com/ovh/design-system/commit/3b4c767b5fb2c7d90b8acf2e787d69aa5a048c0f))
* **icons:** add download icon ([#46](https://github.com/ovh/design-system/issues/46)) ([5348075](https://github.com/ovh/design-system/commit/5348075b3faff0831caa521b435a0e6c2d2de88d))



[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.1.3](https://ovhcloud.design/v12.1.3/?path=/docs/design-system-changelog--page) (2023-05-16)
[compare](https://github.com/ovh/design-system/compare/v12.1.2...v12.1.3)

**Note:** Version bump only for package ods





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.1.2](https://ovhcloud.design/v12.1.2/?path=/docs/design-system-changelog--page) (2023-05-16)
[compare](https://github.com/ovh/design-system/compare/v12.1.1...v12.1.2)

**Note:** Version bump only for package ods







[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.1.1](https://ovhcloud.design/v12.1.1/?path=/docs/design-system-changelog--page) (2023-05-05)
[compare](https://github.com/ovh/design-system/compare/v12.1.0...v12.1.1)

### Bug Fixes

* **storybook:** wrong links on home page ([#35](https://github.com/ovh/design-system/issues/35)) ([d582187](https://github.com/ovh/design-system/commit/d58218795fd7c243535fd6502ea32878d2eb4cc0))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.1.0](https://ovhcloud.design/v12.1.0/?path=/docs/design-system-changelog--page) (2023-05-03)
[compare](https://github.com/ovh/design-system/compare/v12.0.5...v12.1.0)

### Bug Fixes

* **tabs:** fix tabs for master ([#34](https://github.com/ovh/design-system/issues/34)) ([61bfe4a](https://github.com/ovh/design-system/commit/61bfe4accfba7df4cc176a581956dcf8ea5b1e4d))
* remove yarn.lock for generator library ([#17](https://github.com/ovh/design-system/issues/17)) ([ee0e5b8](https://github.com/ovh/design-system/commit/ee0e5b8157608270bc3e2783226f178165eb1ea3))
* wrong packages versions ([#32](https://github.com/ovh/design-system/issues/32)) ([bace87e](https://github.com/ovh/design-system/commit/bace87e82c3fad0315043698a563204f86f7cf5c))
* **button:** fix width issue, ellipsis when flex & typo for lg ([#16](https://github.com/ovh/design-system/issues/16)) ([bb32708](https://github.com/ovh/design-system/commit/bb32708531bdc3fc2eefe62237370ab106726c26))
* **button:** remove extra buttons on Storybook story ([#6](https://github.com/ovh/design-system/issues/6)) ([3735e04](https://github.com/ovh/design-system/commit/3735e0475af5c961b58f8915ab2dc75502cf7a26))
* **range:** wrong color when range is in error ([#4](https://github.com/ovh/design-system/issues/4)) ([56207e5](https://github.com/ovh/design-system/commit/56207e568de76db45df3a88204661bbd60706cb7))


### Features

* **component.tabs:** Add new component tabs ([#13](https://github.com/ovh/design-system/issues/13)) ([e73b220](https://github.com/ovh/design-system/commit/e73b220bb287ad2f0233297ad4477134af91947b))
* **doc:** add some fixes to troubleshooting ([#12](https://github.com/ovh/design-system/issues/12)) ([80525e6](https://github.com/ovh/design-system/commit/80525e66b293ef4b987863e3aed1afc9a8fd34d2))
* **doc:** update contributing doc ([#7](https://github.com/ovh/design-system/issues/7)) ([bc1b05b](https://github.com/ovh/design-system/commit/bc1b05bc0417e611f777732c405e3a73fb033b99))
* **doc:** update what is new ([#33](https://github.com/ovh/design-system/issues/33)) ([b4b3404](https://github.com/ovh/design-system/commit/b4b3404bf659d13bac2c30a6953f2b5242559e20))
* **generator:** add typedoc and tsconfig generation ([#19](https://github.com/ovh/design-system/issues/19)) ([928f881](https://github.com/ovh/design-system/commit/928f8815b0a183694d48cb1ca63c810d7cbf52ad))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.0.5](https://ovhcloud.design/v12.0.5/?path=/docs/design-system-changelog--page) (2023-04-28)
[compare](https://github.com/ovh/design-system/compare/v12.0.4...v12.0.5)

### Bug Fixes

* **global:** rm forbidden word artifactory ([#30](https://github.com/ovh/design-system/issues/30)) ([7402169](https://github.com/ovh/design-system/commit/740216971f6162820f5b6488251d92fc4caf4d2c))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.0.4](https://ovhcloud.design/v12.0.4/?path=/docs/design-system-changelog--page) (2023-04-28)
[compare](https://github.com/ovh/design-system/compare/v12.0.3...v12.0.4)

### Bug Fixes

* **button:** submit button when in form ([#27](https://github.com/ovh/design-system/issues/27)) ([52a6f55](https://github.com/ovh/design-system/commit/52a6f558a6d252ae15aa12ee82185c9ffc782c23))
* **quantity:** disable button when min input is 0 ([#26](https://github.com/ovh/design-system/issues/26)) ([1255a10](https://github.com/ovh/design-system/commit/1255a105ea318452d22b282ee01d0ab3bb3a5d60))
* **quantity:** fix osds-input type in quantity ([#22](https://github.com/ovh/design-system/issues/22)) ([c130868](https://github.com/ovh/design-system/commit/c1308680b61850e16b761e8a5a61482364995759))
* **testing:** fix imported cmpts screenshot tests ([#25](https://github.com/ovh/design-system/issues/25)) ([5aa963a](https://github.com/ovh/design-system/commit/5aa963ae85e4bb802830bbe973f87057fe008a56))



[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.0.3](https://ovhcloud.design/v12.0.3/?path=/docs/design-system-changelog--page) (2023-02-28)
[compare](https://github.com/ovh/design-system/compare/v12.0.2...v12.0.3)

**Note:** Version bump only for package ods







[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.0.2](https://ovhcloud.design/v12.0.2/?path=/docs/design-system-changelog--page) (2023-02-28)
[compare](https://github.com/ovh/design-system/compare/v12.0.1...v12.0.2)

### Bug Fixes

* **ods:** update generate doc script for releasing ([ce6cdf0](https://github.com/ovh/design-system/commit/ce6cdf0c95be9eb7d478c0a2a609f073392052ce))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.0.1](https://ovhcloud.design/v12.0.1/?path=/docs/design-system-changelog--page) (2023-02-28)
[compare](https://github.com/ovh/design-system/compare/v12.0.0...v12.0.1)

### Bug Fixes

* **ods:** update generate doc script for releasing ([96e4e81](https://github.com/ovh/design-system/commit/96e4e8132908ba6cf0c0cbf8211110f9e51b5d4d))





[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)


# [12.0.0](https://ovhcloud.design/v12.0.0/?path=/docs/design-system-changelog--page) (2023-02-27)
12.0.0

### Bug Fixes

* **ods:** some obsolete links in readme ([a9cbadb](https://github.com/ovh/design-system/commit/a9cbadb177652b51a80d9b1149ee32071ccfe39d))



[Latest version](https://ovhcloud.design/latest/?path=/docs/design-system-changelog--page)
