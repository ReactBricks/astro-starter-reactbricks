import { useEffect, useRef, useState } from 'react'
import { Image, isAdmin, Link, Repeater, types } from 'react-bricks/astro'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FiMenu, FiX } from 'react-icons/fi'
import useOnClickOutside from './useClickOutside'

import styles from '../../../styles/Header.module.css'

interface HeaderProps {
  menuItems: types.RepeaterItems
  logo: types.IImageSource
  buttons: types.RepeaterItems
}

const Header: types.Brick<HeaderProps> = ({ logo, menuItems, buttons }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // - in Admin get the current theme from `isDarkColorMode`
  // - in the frontend page get the current theme from localStorage

  const [currentTheme, setCurrentTheme] = useState(
    isAdmin() || typeof window === 'undefined' ? '' : window.theme.getTheme()
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setMobileMenuOpen(false))

  const toggleColorMode = () => {
    if (typeof window !== 'undefined') {
      const newColorMode = window.theme.getTheme() === 'dark' ? 'light' : 'dark'
      window.theme.setTheme(newColorMode)
      setCurrentTheme(newColorMode)
    }
  }

  return (
    <section className={styles.section}>
      <nav className={styles.navClass}>
        <Link href="/" aria-label="home" className={styles.linkLogo}>
          <Image
            propName="logo"
            alt="Logo"
            source={logo}
            maxWidth={300}
            imageClassName={styles.imageClass}
          />
        </Link>
        <div className={styles.containerMenuItems}>
          <Repeater
            propName="menuItems"
            items={menuItems}
            itemProps={{ mobileRef: ref, setMobileMenuOpen }}
          />
        </div>
        <div className={styles.containerButtons}>
          <Repeater
            propName="buttons"
            items={buttons}
            itemProps={{ simpleAnchorLink: true }}
            renderWrapper={(items) => (
              <div className={styles.buttonsWrapper}>{items}</div>
            )}
          />
        </div>

        {/* DARK MODE BUTTON */}
        {mounted && (
          <button
            type="button"
            className={styles.darkModeButton}
            onClick={toggleColorMode}
          >
            {currentTheme === 'light' ? (
              <BsMoonFill />
            ) : (
              <BsSunFill
                style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
              />
            )}
          </button>
        )}

        <div ref={ref} className={styles.containerHamburgerMenu}>
          <button
            className={styles.buttonHamburgerMenu}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX size={18} className={styles.hamburgerMenuFiX} />
            ) : (
              <FiMenu size={20} className={styles.hamburgerMenuFiMenu} />
            )}
          </button>
          {mobileMenuOpen && (
            <div className={styles.containerHamburgerMenuItems}>
              <Repeater
                propName="menuItems"
                items={menuItems}
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
        </div>
      </nav>
    </section>
  )
}

Header.schema = {
  name: 'header',
  label: 'Header',
  category: 'layout',
  tags: ['header', 'menu'],
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'header-menu-item',
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: 'button',
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [],
  getDefaultProps: () => ({
    menuItems: [
      {
        linkPath: '/',
        linkText: 'Home',
      },
      {
        linkPath: '/about-us',
        linkText: 'About us',
      },
      {
        linkPath: '',
        linkText: 'Features',
        submenuItems: [
          {
            linkText: 'Visual editing',
            linkDescription:
              'The best visual experience for your content editors',
            linkPath: '/',
          },
        ],
      },
    ],
    logo: {
      src: 'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
    },
    buttons: [
      {
        text: 'Edit content',
        href: '/admin',
        isTargetBlank: false,
        type: 'link',
        variant: 'solid',
        padding: 'small',
      },
    ],
  }),
  astroInteractivity: 'visible',
}

export default Header
