import { RichText as CMSRichText, RichTextProps } from "@graphcms/rich-text-react-renderer"

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
    />
  )
}