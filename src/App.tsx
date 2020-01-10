import { create, tsx, invalidator } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import dojo from '@dojo/themes/dojo';
import EditableSpan from './widgets/editable-span';
import * as css from "./App.m.css";

const factory = create({ theme, invalidator });

let value = "Hello World";

export default factory(function App({ middleware: { theme, invalidator } }) {
	if (!theme.get()) {
		theme.set(dojo);
	}

	return <div classes={[css.root]}>
		<div>Click below "Hello World" to edit:</div>
		<EditableSpan
			value={value} 
			onChanged={(newValue) => { 
				value = newValue; 
				invalidator(); 
			}} />
	</div>;
});
