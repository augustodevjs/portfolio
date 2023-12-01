type CmsIconProps = {
  icon: string;
}

export const CmsIcon = ({ icon }: CmsIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon
      }}
    />
  )
}