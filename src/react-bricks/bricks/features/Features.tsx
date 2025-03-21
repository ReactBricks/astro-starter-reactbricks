import classNames from 'classnames'
import { Repeater, types } from 'react-bricks/astro'
import { icons } from './defaultImages'

import styles from '../../../styles/Features.module.css'

export type ColsNumber = '2' | '3' | '4'

interface FeaturesProps {
  colsNumber: ColsNumber
  features: types.RepeaterItems
}

const Features: types.Brick<FeaturesProps> = ({ colsNumber, features }) => {
  return (
    <div className={styles.section}>
      <div
        className={classNames(
          styles.container,
          colsNumber === '2' ? styles.sizeSmall : styles.sizeNormal
        )}
      >
        <Repeater
          propName="features"
          items={features}
          itemProps={{ colsNumber: colsNumber }}
        />
      </div>
    </div>
  )
}
Features.schema = {
  name: 'features',
  label: 'Features',
  category: 'main content',
  tags: ['features'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx',

  getDefaultProps: () => ({
    colsNumber: '2',
    features: [
      {
        title: 'The best experience for editors',
        text: 'Your marketing team hates gray forms. Give them the easiest UX.',
        withIcon: true,
        withLink: false,
        image: icons.PHOTO_STACK,
      },
      {
        title: 'React components for devs',
        text: 'Leverage React to create amazing visually editable content blocks.',
        withIcon: true,
        withLink: false,
        image: icons.MIND_MAP,
      },
      {
        title: 'Your design system',
        text: 'Deploy your pixel-perfect design system and be sure nobody can break it..',
        withIcon: true,
        withLink: false,
        image: icons.RADAR_PLOT,
      },
      {
        title: 'Enterprise ready',
        text: 'Collaboration, localization, granular permissions, SSO, top support: we got you covered.',
        withIcon: true,
        withLink: false,
        image: icons.DATABASE,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'features',
      itemType: 'feature-item',
      itemLabel: 'Feature',
      min: 0,
      max: 9,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Columns',
      defaultOpen: true,
      props: [
        {
          name: 'colsNumber',
          label: 'Columns number',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: '2', label: '2 columns' },
              { value: '3', label: '3 columns' },
              { value: '4', label: '4 columns' },
            ],
          },
        },
      ],
    },
  ],
}
export default Features
