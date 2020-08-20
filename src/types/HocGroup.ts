import Context from "./Context";

type HocGroup = (options?: { [key: string]: any }) => (context?: Context) => Context

export default HocGroup
