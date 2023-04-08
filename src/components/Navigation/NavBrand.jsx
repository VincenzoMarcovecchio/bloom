import React from "react";
import AutoLink from "../AutoLink/AutoLink";

const NavBrand = ({ brand, title }) => (
	<div className="brand">
		<AutoLink className="flex align-items-center" to="/">
			<span className="title">
				<strong>It's made of science</strong>
			</span>
		</AutoLink>
	</div>
);

export default NavBrand;
