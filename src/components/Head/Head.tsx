import React from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

const Head = ({ title, description }: HeadProps) => {
  return (
    <Helmet title={title ? `${title} | My Site` : "My Site"}>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
