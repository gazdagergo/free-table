  type Group = {
    id: string
    label: string
    [key: string]: string
  }

  type Record = {
    id: string;
    city: string;
    [key:string]: string;
  };

export type GroupObj = {
    [key: string]: {
      id: string
      label: string
      items: Record[]
    }
  }

  export default (data: Record[], groups: Group[]) => {
    let key: string;

    const groupObj:GroupObj = groups.reduce((acc, { id, label, ...rest }) => {
    key = Object.entries(rest)[0][0]
    const value = Object.entries(rest)[0][1]
    
    return {
      ...acc, [value]: { id, label, items: [] }
    }}, {})

    data.reduce((acc, record) => {
      acc[record[key]].items.push(record)
      return acc
    }, groupObj)

    return Object.values(groupObj)
  }