import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import {MainDiv} from '../../common/MainDiv/MainDiv';

import IMGdoradztwo from '../../../images/doradztwo.png';
import IMGhomepage1 from '../../../images/homepage1.png';
import IMGoferta from '../../../images/oferta.png';
import IMGhomepage3 from '../../../images/homepage3.png';
import {RightDiv} from '../../common/RightDiv/RightDiv';
import {LeftDiv} from '../../common/LeftDiv/LeftDiv';

const Component = ({homepageData}) => {
  // const homepageData = {
  //   mainDivContent: {
  //     title: `PROFESJONALNE \n DORADZTWO`,
  //     subtitle: 'w zakresie programów lojalnościowych \n oraz wsparcia sprzedaży B2B oraz B2C',
  //     image: IMGdoradztwo,
  //   },
  //   whoDiv: {
  //     title: `kim \n jesteśmy`,
  //     subtitle:
  //       'Gadżeciarzami. Od ponad 10 lat zajmujemy się wpieraniem naszych klientów w projektowaniu, doradztwie, wdrażaniu i obsłudze programów lojalnościowych i motywacyjnych.  Uwielbiamy technologiczne nowinki, pomysły z branży dekoracyjnej, inspiracje modowe i wszystko czego  wspólny mianownik można nazwać gadżetem.',
  //     buttonTo: '/onas',
  //     image: IMGhomepage1,
  //   },
  //   offertDiv: {
  //     title: `nasza \n oferta`,
  //     subtitle:
  //       'Jeśli poszukujesz specjalistów od gadżetów to jesteś w odpowiednim miejscu – doradzamy, wpieramy, poszukujemy i przygotowujemy. Mamy po swojej stronie specjalistów ds. strategii marketingowych, ds. badań rynkowych i grafików. Zerknij do naszej oferty.',
  //     buttonTo: '/oferta',
  //     image: IMGoferta,
  //   },
  //   contactDiv: {
  //     title: `zapraszamy \n do kontaktu`,
  //     subtitle:
  //       'Jeśli poszukujesz specjalistów od gadżetów \n – nie krępuj się! Zadzwoń lub napisz. Jesteśmy do usług!',
  //     buttonTo: '/kontakt',
  //     image: IMGhomepage3,
  //   },
  // };
  // const {title, subtitle, image} = homepageData.mainDivContent;
  console.log(homepageData);

  return (
    <div className={styles.root}>
      {/* <MainDiv title={title} subtitle={subtitle} image={image} />
      <LeftDiv
        title={homepageData.whoDiv.title}
        subtitle={homepageData.whoDiv.subtitle}
        buttonTo={homepageData.whoDiv.buttonTo}
        image={homepageData.whoDiv.image}
      />
      <RightDiv
        title={homepageData.offertDiv.title}
        subtitle={homepageData.offertDiv.subtitle}
        buttonTo={homepageData.offertDiv.buttonTo}
        image={homepageData.offertDiv.image}
      />
      <LeftDiv
        title={homepageData.contactDiv.title}
        subtitle={homepageData.contactDiv.subtitle}
        buttonTo={homepageData.contactDiv.buttonTo}
        image={homepageData.contactDiv.image}
      /> */}
    </div>
  );
};

Component.propTypes = {
  data: PropTypes.shape({
    mainDivContent: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
