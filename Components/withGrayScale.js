import React from "react";

export default function WithGrayScale(Component) {
  return class sad extends React.Component {
    render() {
      console.log(this.props);
      return (
        <div>
          <Component {...this.props} />
        </div>
      );
    }
  };
}
