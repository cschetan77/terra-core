import React from 'react';
import classNames from 'classnames/bind';
import Card from 'terra-card';
import CellGrid, { Cell } from 'terra-cell-grid';
import Image from 'terra-image';
import PillList, { Pill } from 'terra-pills';
import ArticlePhoto from '../../../common/images/creative-commons/20384488141_e08573b033__399x314.jpg';
import styles from './PillsExamplesCommon.module.scss';

const cx = classNames.bind(styles);

const IntroductionToPills = () => (
  <Card variant="raised" className={cx('card-article')}>
    <CellGrid>
      <Cell key="cell-left" width={{ static: { value: 350, unit: 'px' } }}>
        <div className={cx('card-article-photo')}>
          <Image
            src={ArticlePhoto}
            alt="Photo: James H. Shannon Building (Building One), NIH campus, Bethesda MD
      by National Institutes of Health (NIH)"
            fit="cover"
            height="233"
            width="320"
          />
          <p className={cx('card-article-photo-caption')}>James H. Shannon Building (Building One), NIH campus, Bethesda MD by National Institutes of Health (NIH) is marked under CC PDM 1.0.</p>
        </div>
      </Cell>
      <Cell key="cell-right">
        <div className={cx('card-article-content')}>
          <h2 className={cx('card-article-content-heading')}>National Institutes of Health</h2>
          <p>The National Institutes of Health (NIH) is the primary agency of the United States government responsible for biomedical and public health research. It was founded in the late 1880s and is now part of the United States Department of Health and Human Services. </p>
          <p>The NIH comprises 27 separate institutes and centers of different biomedical disciplines and is responsible for many scientific accomplishments, including the discovery of fluoride to prevent tooth decay, the use of lithium to manage bipolar disorder, and the creation of vaccines against hepatitis, Haemophilus influenzae (HIB), and human papillomavirus (HPV).</p>
        </div>
        <div className={cx('card-article-pills')}>
          <span
            id="terra-pills-example-introduction-pill-list-label"
            className={cx('card-article-pill-list-label')}
          >
            Article Keywords:
          </span>
          <PillList
            ariaLabel="Article Keywords:"
            ariaLabelledBy="terra-pills-example-introduction-pill-list-label"
          >
            <Pill label="National Institutes of Health" />
            <Pill label="Biomedical Sciences" />
            <Pill label="Public Health Research" />
            <Pill label="Scientific Discovery" />
            <Pill label="US Department of Health and Human Services" />
          </PillList>
        </div>
      </Cell>
    </CellGrid>
  </Card>
);

export default IntroductionToPills;
