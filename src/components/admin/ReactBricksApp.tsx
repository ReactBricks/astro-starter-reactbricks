import { useState } from 'react'
import { ReactBricks, types } from 'react-bricks'
import config from '../../react-bricks/config'

export default function ReactBricksApp({
  children,
}: {
  children: React.ReactNode
}) {
  // Color Mode Management
  const savedColorMode =
    typeof window === 'undefined' ? '' : localStorage.getItem('color-mode')

  const [colorMode, setColorMode] = useState(savedColorMode || 'light')

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
  }

  const renderLocalLink: types.RenderLocalLink = ({
    href,
    className,
    activeClassName,
    tabIndex,
    children,
  }) => {
    let anchorClassName = className || ''

    let pathname = typeof window === 'undefined' ? '' : window.location.pathname

    if (activeClassName && pathname && pathname === href) {
      anchorClassName = `${className} ${activeClassName}`
    }

    return (
      <a href={href} className={anchorClassName} tabIndex={tabIndex}>
        {children}
      </a>
    )
  }

  const reactBricksConfig = {
    ...config,
    renderLocalLink,
    isDarkColorMode: colorMode === 'dark',
    toggleColorMode,
    contentClassName: `antialiased font-content nunito-sans ${colorMode} ${
      colorMode === 'dark' ? 'dark' : 'light'
    }`,
  }

  return <ReactBricks {...reactBricksConfig}>{children}</ReactBricks>
}
