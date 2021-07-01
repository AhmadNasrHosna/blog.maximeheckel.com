import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@theme/components/Button';
import { LinkButton } from '@theme/components/Button/LinkButton';
import Card from '@theme/components/Card';
import Grid from '@theme/components/Grid';
import {
  ArrowIcon,
  ContactIcon,
  EnterIcon,
  ExternalIcon,
  PortfolioIcon,
  RSSIcon,
  TwitterIcon,
} from '@theme/components/Icons';
import Logo from '@theme/components/Logo';
import Callout from '@theme/components/MDX/Callout';
import { VARIANT } from '@theme/components/MDX/Callout/Callout';
import CodeBlock from '@theme/components/MDX/Code/CodeBlock';
import LiveCodeBlock from '@theme/components/MDX/Code/LiveCodeBlock';
import InlineCode from '@theme/components/MDX/InlineCode';
import MDXBody, { ListItem } from '@theme/components/MDX/MDX';
import Pill, { PillVariant } from '@theme/components/Pill';
import Seo from '@theme/components/Seo';
import Tooltip from '@theme/components/Tooltip';
import Tweet from '@theme/components/Tweet';
import Layout from '@theme/layout';
import { AnimatePresence } from 'framer-motion';
import { getTweets } from 'lib/tweets';
import dynamic from 'next/dynamic';
import React from 'react';
import { TransformedTweet } from 'types/tweet';

/**
 * TODO:
 * - Decouple Search in 2 components => Overlay and Command Center
 * - Rename Search
 * - Polish interface for lists => should be in global.css if possible?
 * - VARIANT callout should be renamed "CalloutVariant"
 * - Small Responsive issue with Live Code Block on medium size screen
 * - See tooltip, why is it all the way to the right (maybe grid? maybe parent element?)
 */

const Search = dynamic(() => import('@theme/components/Search'), {
  ssr: false,
});

const HR = styled('hr')`
  height: 2px;
  width: 100%;
  background: hsl(var(--palette-gray-20));
`;

const Label = styled('p')`
  margin-bottom: 8px;
`;

/**
 * 
 *  rgb(145 199 255) 25%,
    gb(210 240 255) 75%
 * 
 */

export default function Design(props: {
  tweets: Record<string, TransformedTweet>;
}) {
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <Layout footer>
      <Seo title="Components" />
      <Grid
        columns="var(--layout-medium)"
        columnGap={20}
        rowGap={64}
        css={css`
          padding-top: 128px;
          padding-top: 64px;
          > * {
            grid-column: 2;
          }
        `}
      >
        <div>
          <h1>Components / Design System</h1>
          <HR />
        </div>
        <section>
          <h2>Card</h2>
          <Grid rowGap={30}>
            <Card
              css={css`
                margin-top: 150px;
                margin-bottom: 150px;
                background-image: linear-gradient(
                  135deg,
                  rgb(88 154 253) rgb(188 236 255)
                );
                max-width: 250px;
                height: 250px;
                position: relative;
                overflow: hidden;
                user-select: none;
              `}
            >
              <div
                css={css`
                  height: 100%;
                  left: 0;
                  position: absolute;
                  top: 0;
                  transform-origin: center center;
                  width: 100%;

                  animation: rotateGradient 10s infinite;

                  @media (prefers-reduced-motion) {
                    display: none;
                    animation: none;
                  }

                  @keyframes rotateGradient {
                    0% {
                      transform: rotate(0deg);
                    }
                    50% {
                      transform: rotate(135deg);
                    }
                    100% {
                      transform: rotate(0deg);
                    }
                  }
                `}
              >
                <div
                  css={css`
                    background-image: linear-gradient(
                      135deg,
                      rgb(88 154 253) 35%,
                      rgb(188 236 255) 65%
                    );
                    transform: scale(1.5, 3);
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    transform-origin: center center;
                    width: 100%;
                  `}
                />
              </div>
              <Card.Body>
                <div
                  css={css`
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                  `}
                >
                  <div>
                    <p
                      css={css`
                        color: rgba(0, 0, 0, 0.4);
                        font-size: 32px;
                        margin-bottom: 0px;
                        line-height: 1rem;
                      `}
                    >
                      <span
                        css={css`
                          margin-left: -8px;
                          color: rgba(0, 0, 0, 0.4);
                          font-size: 112px;
                          font-weight: 500;
                        `}
                      >
                        99
                      </span>
                      %
                    </p>
                    <p
                      css={css`
                        color: rgba(0, 0, 0, 0.4);
                        margin-bottom: 0px;
                      `}
                    >
                      Blood Oxygen
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>Basic Card</Card.Body>
            </Card>

            <Card title="Title for the card">
              <Card.Body>Card with Title</Card.Body>
            </Card>

            <Card>
              <Card.Header>Some Custom Header</Card.Header>
              <Card.Body>Card With Custom Header</Card.Body>
            </Card>

            <Card>
              <div
                css={css`
                  padding: 40px;
                `}
              >
                Card With custom Body
              </div>
            </Card>
            <Card level={0}>
              <Card.Body>Basic Card level 0</Card.Body>
            </Card>
            <Card level={1}>
              <Card.Body>Basic Card level 1</Card.Body>
            </Card>
            <Card level={2}>
              <Card.Body>Basic Card level 2</Card.Body>
            </Card>

            <Card level={3}>
              <Card.Body>Basic Card level 3</Card.Body>
            </Card>
          </Grid>
        </section>
        <section id="logo">
          <h2>Logo</h2>
          <Logo />
        </section>
        <section id="typography">
          <h2>Typography</h2>
          <Label>h1</Label>
          <h1>Almost before we knew it, we had left the ground.</h1>
          <Label>h2</Label>
          <h2>Almost before we knew it, we had left the ground.</h2>
          <Label>h3</Label>
          <h3>Almost before we knew it, we had left the ground.</h3>
          <Label>h4</Label>
          <h4>Almost before we knew it, we had left the ground.</h4>
          <Label>p</Label>
          <p>Almost before we knew it, we had left the ground.</p>
          <Label>p (bold)</Label>
          <p style={{ fontWeight: 700 }}>
            Almost before we knew it, we had left the ground.
          </p>
          <Label>p (italic)</Label>
          <p style={{ fontStyle: 'italic' }}>
            Almost before we knew it, we had left the ground.
          </p>
        </section>
        <section id="lists">
          <h2>Lists</h2>
          <MDXBody
            /**
             * Cancel grid MDXBody here
             */
            css={css`
              display: block;
            `}
          >
            <ul>
              {/*@ts-ignore */}
              <ListItem>First</ListItem>
              {/*@ts-ignore */}
              <ListItem>Second</ListItem>
              {/*@ts-ignore */}
              <ListItem>Third</ListItem>
            </ul>
            <ol>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
            </ol>
          </MDXBody>
        </section>
        <section id="icons">
          <h2>Icons</h2>
          <TwitterIcon stroke="var(--maximeheckel-colors-typeface-2)" />{' '}
          <ExternalIcon stroke="var(--maximeheckel-colors-typeface-2)" />{' '}
          <RSSIcon stroke="var(--maximeheckel-colors-typeface-2)" />{' '}
          <ContactIcon stroke="var(--maximeheckel-colors-typeface-2)" />{' '}
          <EnterIcon stroke="var(--maximeheckel-colors-typeface-2)" />{' '}
          <PortfolioIcon stroke="var(--maximeheckel-colors-typeface-2)" />{' '}
          <ArrowIcon stroke="var(--maximeheckel-colors-typeface-2)" />
        </section>
        <section id="tooltip">
          <h2>Tooltip</h2>
          <Tooltip
            id="exampletooltip"
            tooltipText="@MaximeHeckel"
            tooltipVisuallyHiddenText="Follow Me on Twitter"
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 50px;
                width: 150px;
                padding: 8px;
              `}
              aria-describedby="exampletooltip"
            >
              <TwitterIcon stroke="var(--maximeheckel-colors-typeface-2)" />{' '}
              Hover Me!
            </div>
          </Tooltip>
        </section>
        <section id="pill">
          <h2>Pill</h2>
          <Grid rowGap={32}>
            <div>
              <Pill variant={PillVariant.INFO}>Info Pill</Pill>
            </div>
            <div>
              <Pill variant={PillVariant.SUCCESS}>Success Pill</Pill>
            </div>
            <div>
              <Pill variant={PillVariant.WARNING}>Warning Pill</Pill>
            </div>
            <div>
              <Pill variant={PillVariant.DANGER}>Danger Pill</Pill>
            </div>
          </Grid>
        </section>
        <section id="callout">
          <h2>Callout</h2>
          <Grid rowGap={32}>
            <div>
              <Callout variant={VARIANT.INFO}>Info Callout</Callout>
            </div>
            <div>
              <Callout variant={VARIANT.DANGER}>Danger Callout</Callout>
            </div>
          </Grid>
        </section>
        <section id="button">
          <Grid rowGap={32}>
            <h2>Button</h2>
            <div>
              <Button>Default</Button>
            </div>
            <div>
              <Button primary>Primary</Button>
            </div>
            <div>
              <Button secondary>Secondary</Button>
            </div>
            <div>
              <Button tertiary>Tertiary</Button>
            </div>
            <div>
              <Label>Icon Button</Label>
              <LinkButton>
                <TwitterIcon stroke="var(--maximeheckel-colors-typeface-2)" />
              </LinkButton>
            </div>
          </Grid>
        </section>
        <section id="inline-code">
          <h2>Inline Code</h2>
          <InlineCode>Some Inline Code</InlineCode>
        </section>
        <section id="code-block">
          <h2>Code Block</h2>
          <Label>Basic</Label>
          <CodeBlock
            metastring=""
            language="javascript"
            codeString={`console.log("hello world")

/**
 * Some comments
 */
function sayHi(name) {
    var message = \`hi \${name}\`
    return message;
}`}
          />
          <Label>With title and highlighting</Label>
          <CodeBlock
            metastring="{6-8} title=Code snippet title"
            language="javascript"
            codeString={`console.log("hello world")

/**
 * Some comments
 */
function sayHi(name) {
    var message = \`hi \${name}\`
    return message;
}`}
          />
          <Label>Live (for React code only)</Label>
          <LiveCodeBlock
            live
            metastring=""
            language="javascript"
            codeString={`const WavingHand = () => (
    <motion.div
        style={{
        marginBottom: '-20px',
        marginRight: '-45px',
        paddingBottom: '20px',
        paddingRight: '45px',
        display: 'inline-block',
        }}
        animate={{ rotate: 20 }}
        transition={{
        yoyo: Infinity,
        from: 0,
        duration: 0.2,
        ease: 'easeInOut',
        type: 'tween',
        }}
    >
        👋
    </motion.div>
    );

const Hi = () => (
    <h1>
        Hi <WavingHand /> !
    </h1>
);

render(<Hi />);`}
          />
        </section>
        <section id="command-center">
          <h2>Command Center / Search </h2>
          <Button onClick={() => setShowSearch(true)}>
            Show Command Center
          </Button>
          <AnimatePresence>
            {showSearch ? (
              <Search onClose={() => setShowSearch(false)} />
            ) : null}
          </AnimatePresence>
        </section>
        <section id="tweet">
          <h2>Tweet</h2>
          <Tweet tweet={props.tweets['1386013361809281024']} />
        </section>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets(['1386013361809281024']);

  return { props: { tweets } };
}
