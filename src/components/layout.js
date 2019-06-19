import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { MDXProvider } from "@mdx-js/react";

import Header from "./header";
import "./layout.css";
import CodeBlock from "../components/codeblock"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <MDXProvider components={{ code: CodeBlock }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0
            }}
          >
            {children}
          </div>
        </MDXProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
