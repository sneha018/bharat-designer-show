import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * A reusable component to manage page-specific SEO meta tags.
 * @param {object} props - The component props.
 * @param {string} props.title - The title for the page.
 * @param {string} props.description - The meta description for the page.
 * @param {string} [props.keywords] - Optional comma-separated keywords.
 */
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      <meta name="google-site-verification" content="WBbtCXvCIW1gjw95GHBUr37_0K7IYSQHbutA-J3NPbE" />
    </Helmet>
  );
};

// Default props for pages that don't specify their own.
Meta.defaultProps = {
  title: 'Bharat Designer Show | The Pinnacle of Indian Fashion',
  description: 'Experience the fusion of heritage and avant-garde at the Bharat Designer Show. Discover visionary designers, view the schedule, and get your tickets for India\'s premier fashion event.',
  keywords: 'indian fashion, designer show, couture, fashion week, bharat designer show, new delhi fashion',
};

export default Meta;