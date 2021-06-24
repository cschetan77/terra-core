import React from 'react';
import classNames from 'classnames/bind';
import Card from 'terra-card';
import Image from 'terra-image';
import PillList, { Pill } from 'terra-pills';
import Spacer from 'terra-spacer';
import ArticlePhoto from '../../../common/images/creative-commons/20384488141_e08573b033__800x629.jpg';
import styles from './ExampleStyles.module.scss';

const cx = classNames.bind(styles);

/*
const ArticlePhotoCaption = (
  <p>
    James H. Shannon Building (Building One), NIH campus, Bethesda MD by National Institutes of Health (NIH) is marked under CC PDM 1.0. To view the terms, visit https://creativecommons.org/publicdomain/mark/1.0/
  </p>
);

const ArticleTitle = (
  <h2>National Institutes of Health</h2>
);

const ArticleTextBody = (
  <React.Fragment>
    <p>The National Institutes of Health (NIH) (/ɛn.aɪ.ˈeɪtʃ/) is the primary agency of the United States government responsible for biomedical and public health research. It was founded in the late 1880s and is now part of the United States Department of Health and Human Services. The majority of NIH facilities are located in Bethesda, Maryland and other nearby suburbs of the Washington metropolitan area, with other primary facilities in the Research Triangle Park in North Carolina and smaller satellite facilities located around the United States. The NIH conducts its own scientific research through its Intramural Research Program (IRP) and provides major biomedical research funding to non-NIH research facilities through its Extramural Research Program.</p>
    <p>As of 2013, the Intramural Research Program (IRP) had 1,200 principal investigators and more than 4,000 postdoctoral fellows in basic, translational, and clinical research, being the largest biomedical research institution in the world,[6] while, as of 2003, the extramural arm provided 28% of biomedical research funding spent annually in the U.S., or about US$26.4 billion.[7]</p>
    <p>The NIH comprises 27 separate institutes and centers of different biomedical disciplines and is responsible for many scientific accomplishments, including the discovery of fluoride to prevent tooth decay, the use of lithium to manage bipolar disorder, and the creation of vaccines against hepatitis, Haemophilus influenzae (HIB), and human papillomavirus (HPV).[8]</p>
    <p>In 2019, the NIH was ranked number two in the world, behind Harvard University, for biomedical sciences in the Nature Index, which measured the largest contributors to papers published in a subset of leading journals from 2015 to 2018.[9][10]</p>
    <p>todo: cite wikipedia</p>
  </React.Fragment>
);
*/

const IntroductionToPills = () => (
  <Card variant="raised" className={cx('card-article')}>
    <Spacer padding="large+1">
      <div className={cx('card-article-photo')}>
        <Image
          src={ArticlePhoto}
          alt="Photo: James H. Shannon Building (Building One), NIH campus, Bethesda MD
    by National Institutes of Health (NIH)"
          fit="cover"
          height="429"
          width="800"
        />
        <p>James H. Shannon Building (Building One), NIH campus, Bethesda MD by National Institutes of Health (NIH) is marked under CC PDM 1.0. To view the terms, visit https://creativecommons.org/publicdomain/mark/1.0/</p>
      </div>
      <div className={cx('card-article-content')}>
        <h2>National Institutes of Health</h2>
        <p>The National Institutes of Health (NIH) is the primary agency of the United States government responsible for biomedical and public health research. It was founded in the late 1880s and is now part of the United States Department of Health and Human Services. The majority of NIH facilities are located in Bethesda, Maryland and other nearby suburbs of the Washington metropolitan area, with other primary facilities in the Research Triangle Park in North Carolina and smaller satellite facilities located around the United States. The NIH conducts its own scientific research through its Intramural Research Program (IRP) and provides major biomedical research funding to non-NIH research facilities through its Extramural Research Program.</p>
        <p>The NIH comprises 27 separate institutes and centers of different biomedical disciplines and is responsible for many scientific accomplishments, including the discovery of fluoride to prevent tooth decay, the use of lithium to manage bipolar disorder, and the creation of vaccines against hepatitis, Haemophilus influenzae (HIB), and human papillomavirus (HPV).[8]</p>
        <p><i>todo: cite wikipedia</i></p>
      </div>
      <div className={cx('card-article-pills')}>
        <span>Article Keywords:</span>
        <PillList ariaLabel="Article Keywords:">
          <Pill label="Biomedical Sciences" />
          <Pill label="Public Health Research" />
          <Pill label="Scientific Discovery" />
          <Pill label="US Department of Health and Human Services" />
        </PillList>
      </div>
    </Spacer>
  </Card>
);

export default IntroductionToPills;

//          <ArticlePhotoCaption />
//          <ArticleTitle />
//          <ArticleTextBody />
