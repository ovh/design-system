import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { ODS_SPINNER_COLOR, type OdsSpinnerColor } from '../../constants/spinner-color';
import { ODS_SPINNER_SIZE, type OdsSpinnerSize } from '../../constants/spinner-size';
import styles from './odsSpinner.module.scss';

type OdsSpinnerProp = {
  color?: OdsSpinnerColor,
  size?: OdsSpinnerSize,
};

const OdsSpinner: FC<OdsSpinnerProp> = ({
  color = ODS_SPINNER_COLOR.primary,
  size = ODS_SPINNER_SIZE.md,
}): JSX.Element => {
  return (
    <div
      // TODO styles[...]
      className={ classNames(
        styles['ods-spinner__container'],
        styles[`ods-spinner__container--${color}`],
          styles[`ods-spinner__container--${size}`],
      )}
      >
      <svg id="Spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <rect id="Zone" width="24" height="24" fill="none"/>
        <g id="dot" transform="translate(-237.694 -93.932)">
          <path id="Soustraction_2" data-name="Soustraction 2"
                d="M-5236.305-4108.069h0v-2a9.011,9.011,0,0,0,9-9,9.01,9.01,0,0,0-9-9,9.01,9.01,0,0,0-9,9h-2a10.928,10.928,0,0,1,3.222-7.779,10.928,10.928,0,0,1,7.778-3.221,10.929,10.929,0,0,1,7.779,3.221,10.932,10.932,0,0,1,3.221,7.777,10.928,10.928,0,0,1-3.221,7.778A10.931,10.931,0,0,1-5236.305-4108.069Z"
                transform="translate(5486 4225)"/>
          <circle id="dot-2" data-name="dot" cx="1" cy="1" r="1" transform="translate(248.694 114.932)"/>
          <circle id="dot-3" data-name="dot" cx="1" cy="1" r="1" transform="translate(238.694 104.932)"/>
        </g>
      </svg>
      <p>

        The standard Lorem Ipsum passage, used since the 1500s

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        1914 translation by H. Rackham

        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        1914 translation by H. Rackham

        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."

      </p>
    </div>
  );
}

export {
  OdsSpinner,
  type OdsSpinnerProp,
};
