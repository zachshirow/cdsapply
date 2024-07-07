import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

interface Classes { }

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const direction: "auto" | "rtl" | "ltr" | undefined  = fileData.frontmatter?.direction ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article dir={direction} class={classString}>{content}</article>
}

export default (() => Content) satisfies QuartzComponentConstructor
