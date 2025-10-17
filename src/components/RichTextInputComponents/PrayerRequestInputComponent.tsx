import Document from "@tiptap/extension-document";
import { BulletList, ListItem } from "@tiptap/extension-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";

type PrayerRequestInputComponentProps = {
  setPrayerRequest: React.Dispatch<React.SetStateAction<string>>;
};

const PrayerRequestInputComponent = ({
  setPrayerRequest,
}: PrayerRequestInputComponentProps) => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, BulletList, ListItem],
    onUpdate: ({ editor }) => {
      setPrayerRequest(editor.getText());
    },
    content: `
          <ul>
            <li></li>
          </ul>
        `,
  });

  return (
    <div className="bg-white w-1/2 p-2 rounded-lg h-[250px] overflow-auto relative">
      <div className="flex justify-between mb-2 sticky top-0 bg-white z-1">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="text-xs bg-blue-600 font-bold rounded-lg px-2 py-1 cursor-pointer text-white focus:scale-95 transition-all"
        >
          Toggle bullet list
        </button>

        <button
          onClick={() => editor.chain().focus().splitListItem("listItem").run()}
          className="text-xs bg-blue-600 font-bold rounded-lg px-2 py-1 cursor-pointer text-white focus:scale-95 transition-all"
        >
          Split list item
        </button>

        <button
          onClick={() => {
            editor.chain().focus().sinkListItem("listItem").run();
          }}
          className="text-xs bg-blue-600 font-bold rounded-lg px-2 py-1 cursor-pointer text-white focus:scale-95 transition-all"
        >
          Sink list item
        </button>

        <button
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          className="text-xs bg-blue-600 font-bold rounded-lg px-2 py-1 cursor-pointer text-white focus:scale-95 transition-all"
        >
          Lift list item
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default PrayerRequestInputComponent;
