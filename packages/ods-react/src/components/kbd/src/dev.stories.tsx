import { Kbd } from '.';
import style from './dev.module.css';

export default {
  component: Kbd,
  title: 'Kbd dev',
};

export const Default = () => (
  <Kbd>Cmd + L</Kbd>
);

export const CustomStyle = () => (
  <Kbd className={ style['custom-kbd'] }>
    Custom Styled Kbd
  </Kbd>
);

export const InsideText = () => (
  <div>
    <h2>Inside a paragraph</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      To start please press <Kbd>Cmd + L</Kbd> that will allow us to check if the shortcut does indeed work.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
    <h2>Inside a text</h2>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      This is an awesome text (<Kbd><span>Cmd</span><span>+</span><span>K</span></Kbd>) for the most important component of the whole library.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    </span>
  </div>
);
