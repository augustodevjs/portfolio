import { CmsIconProps } from "../types"

export const CmsIcon = ({ icon }: CmsIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon
      }}
    />
  )
}