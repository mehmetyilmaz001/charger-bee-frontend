import React from 'react';
import { IPageHeaderProps } from './PageHeader.types';
import { PageHeaderStyled } from './PageHeader.styled';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const PageHeader: React.FC<IPageHeaderProps> = ({ title, showBreadcrump, actions }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageHeaderStyled>
        <div className="title-breadcrump">
          <h1>{title}</h1>
          {showBreadcrump && <Breadcrumb />}
        </div>
        {actions && <div className="actions">{actions}</div>}
      </PageHeaderStyled>
    </>
  );
};

export default PageHeader;
