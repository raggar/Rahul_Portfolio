import React, { Fragment } from "react";
import CheckBox from "./index";

const CheckBoxGroup = (props) => {
	const { data } = props;
	return (
		<Fragment>
			{Object.keys(data).forEach((key, index) => {
				// console.log(key, data[key], 'moma');
				<CheckBox id={key} labelText={key} />;
			})}
		</Fragment>
	);
};
export default CheckBoxGroup;
