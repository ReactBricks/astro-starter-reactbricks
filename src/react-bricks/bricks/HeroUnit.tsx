import { Image, RichText, Text, types } from 'react-bricks/astro'

import styles from '../../styles/HeroUnit.module.css'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
  icon: types.IImageSource
}

//=============================
// Component to be rendered
//=============================
const MyHeroUnit: types.Brick<HeroUnitProps> = ({
  padding,
  title,
  icon,
  text,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.padding} ${
          padding === 'big' ? styles.bigPadding : styles.smallPadding
        }`}
      >
        <div>
          <Image
            propName="icon"
            source={icon}
            alt="Icon"
            maxWidth={200}
            aspectRatio={1}
            imageClassName={styles.heroImage}
          />
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h1 className={styles.title}>{props.children}</h1>
            )}
            placeholder="Type a title..."
          />
          <RichText
            propName="text"
            value={text}
            renderBlock={(props) => (
              <p className={styles.richText}>{props.children}</p>
            )}
            placeholder="Type a text..."
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight,
              types.RichTextFeatures.Code,
              types.RichTextFeatures.Link,
            ]}
            renderCode={(props) => (
              <code className={styles.code}>{props.children}</code>
            )}
            renderLink={(props) => (
              <a
                href={props.href}
                target={props.target}
                rel={props.rel}
                className={styles.richTextLink}
              >
                {props.children}
              </a>
            )}
          />
        </div>
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
MyHeroUnit.schema = {
  name: 'my-hero-unit',
  label: 'Custom Hero Unit',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default MyHeroUnit
