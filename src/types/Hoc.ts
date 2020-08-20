type HOC = (options: { [key: string]: any }) => (base:any) => (props: { [key: string]: any }) => React.ReactChild

export default HOC
