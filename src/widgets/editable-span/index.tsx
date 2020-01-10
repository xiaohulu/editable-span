import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from "./index.m.css";

export interface EditableSpanProperties {
    value: string;
    onChanged: (value: string) => void
}

const factory = create().properties<EditableSpanProperties>();

export default factory(function EditableSpan({ properties }) {
    const { value, onChanged } = properties();
    return (
        <span
            key="root"
            classes={[css.root]}
            oninput={(event: KeyboardEvent) => {
                const target = event.target as HTMLSpanElement;
                const value = target.textContent || "";
                onChanged(value);
            }}
            contenteditable="true" >
            {/* render different content depend on value */}
            {value === "" ? "Show me when value is empty" : value}
        </span>);
});
