import type { types } from "react-bricks/frontend";

const AstroLink: types.RenderLocalLink = ({
  href,
  className,
  activeClassName,
  isAdmin,
  children,
}) => {
  // let anchorClassName = "";

  // if (router.pathname === href) {
  //   anchorClassName = activeClassName + "";
  // } else {
  //   anchorClassName = className + "";
  // }

  // if (isAdmin) {
  //   return (
  //     <Link href={href} className={anchorClassName}>
  //       {children}
  //     </Link>
  //   );
  // }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default AstroLink;
