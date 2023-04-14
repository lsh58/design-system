import React from "react";
import classNames from "classnames";
import dynamic from "next/dynamic";

const Icon = (props: Component.Icon) => {
  const {
    name,
    color = "text-gdsLightColorIconNormal",
    size = "gdsIconSizeLg",
  } = props;

  const DynamicComponent = dynamic(
    () => import(`../../../public/images/icon/${name}.svg`),
    {
      ssr: false,
    }
  );

  return (
    <>
      <figure
        className={classNames("flex items-center justify-center", size, color)}
      >
        <DynamicComponent />
      </figure>
    </>
  );
};

export default Icon;
