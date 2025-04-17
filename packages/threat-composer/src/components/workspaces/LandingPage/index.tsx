/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 ******************************************************************************************************************** */
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TextContent from '@cloudscape-design/components/text-content';
import { FC } from 'react';
import HowItWorks from '../../../assets/how-it-works.png';
import SwitchToExample from '../../../assets/switch-to-example-workspace.gif';
import { useGlobalSetupContext } from '../../../contexts';

export interface LandingPageProps {
  onDefineWorkload?: () => void;
}

const LandingPage: FC<LandingPageProps> = ({
  onDefineWorkload,
}) => {
  const { setFileImportModalVisible } = useGlobalSetupContext();
  return (
    <ContentLayout
      header={
        <Header
          variant="h1"
          description="A risk modeling tool to help humans to reduce time-to-value when risk modeling"
          actions={
            <SpaceBetween direction="horizontal" size="s">
              <Button onClick={() => setFileImportModalVisible(true)}>Import existing</Button>
              <Button variant="primary" onClick={onDefineWorkload}>
                Define workload or feature
              </Button>
            </SpaceBetween>
          }
        >
          Risk Composer
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="s">
        <Container header={<Header variant="h2">How it works</Header>}>
          <Box padding="xxl">
            <img
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '80%',
              }}
              src={HowItWorks}
            />
          </Box>
        </Container>
        <Container
          header={<Header variant="h2">View an example risk model</Header>}
        >
          <ColumnLayout columns={2}>
            <TextContent>
              <p>
                We've included a base risk model of the Risk Composer tool
                itself as an example. The aim is to provide a common reference
                point for people who are starting off with Risk Composer. You
                may want to use this as the base risk model as a starting
                point to generate a contextualised risk model for your own
                specific needs and deployment of Risk Composer.
              </p>
              <ul>
                <li>
                  To view the example risk model simply switch to the
                  system-defined <b>Example</b> Workspace.
                </li>
                <li>
                  No changes you make within Example workspace will be saved. If
                  you wish to modify it or use is a base, it's recommended you
                  Export it, create a new Workspace and Import it.
                </li>
              </ul>
            </TextContent>
            <img
              style={{
                display: 'block',
              }}
              src={SwitchToExample}
            />
          </ColumnLayout>
        </Container>
        <Container header={<Header variant="h2">Benefits and features</Header>}>
          <ColumnLayout columns={2} variant="text-grid">
            <TextContent>
              <h3>Reduce time-to-value when performing risk modeling</h3>
              <p>
                Helps you focus on brainstorming and collaboration. Guides you
                through the risk model process. Inspires you with examples.
              </p>
            </TextContent>
            <TextContent>
              <h3>Risk models-as-code</h3>
              <p>
                Produces risk models that can be exported and shared as
                structured JSON, making it easy to version control your risk
                models. Additionally supports Markdown and PDF (browser
                dependant)
              </p>
            </TextContent>
            <TextContent>
              <h3>Opinionated risk statement structure</h3>
              <p>
                Helps you create useful risk statements that help you devise
                mitigations and to prioritize.
              </p>
            </TextContent>
            <TextContent>
              <h3>Client-side storage and workspace separation</h3>
              <p>
                Data persisted only client-side with the browser, with workspace
                separation to allow you to work across multiple risk models.
              </p>
            </TextContent>
            <TextContent>
              <h3>Self hosted</h3>
              <p>
                AWS CDK project with optional continuous deployment and
                continuous integration pipeline to self host in your AWS
                account.
              </p>
            </TextContent>
            <TextContent>
              <h3>Open source</h3>
              <p>
                Source code is available for your inspection, forking and
                modifications to suit your specific organizational needs.
              </p>
            </TextContent>
          </ColumnLayout>
        </Container>
        <Container header={<Header variant="h2">Related resources</Header>}>
          <ColumnLayout columns={2} variant="text-grid">
            <TextContent>
              <Link external href="https://github.com/awslabs/risk-composer">
                Risk Composer - GitHub Repository
              </Link>
              <p>
                Get access to the latest source code, raise bugs, and make
                feature requests.
              </p>
            </TextContent>
            <TextContent>
              <Link
                external
                href="https://explore.skillbuilder.aws/learn/course/external/view/elearning/13274/risk-modeling-the-right-way-for-builders-workshop"
              >
                Risk modeling for builders - AWS Skills Builder eLearning
              </Link>
              <p>
                Learn how to risk model using this eLearning training course.
              </p>
            </TextContent>
            <TextContent>
              <Link
                external
                href="https://aws.amazon.com/blogs/security/how-to-approach-risk-modeling"
              >
                How to approach risk modeling - AWS Security Blog
              </Link>
              <p>
                Learn about approaches to integrate risk modeling into your
                organization.
              </p>
            </TextContent>
          </ColumnLayout>
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
};

export default LandingPage;
