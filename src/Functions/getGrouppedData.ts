// import get from "lodash/get";

// import Column from "../types/Column";

/* type StringIncludes = (text: string, find: string) => Boolean;

const stringIncludes:StringIncludes = (text, find) => text.toUpperCase?.().includes(find.toUpperCase())

export default (filter: Filter | {}, data: Record[], columns: Column[]) =>
  data.filter((record) =>
    Object.entries(filter).reduce(
      (acc, [accessor, value]) => stringIncludes(get(record, accessor), value) && acc,
      true
    )
  ); */

  type Group = {
    id: string
    label: string
  }

  type Record = {
    id: string | number;
    city: string;
  };

export type GroupObj = {
    [key: string]: {
      id: string
      label: string
      items: Record[]
    }
  }

  export default (data: Record[], groups: Group[]) => {
    const groupObj:GroupObj = groups.reduce((acc, { id, label }) => ({
      ...acc, [label]: { id, label, items: [] }
    }), {})

    data.reduce((acc, record) => {
      acc[record.city].items.push(record)
      return acc
    }, groupObj)

    return Object.values(groupObj)
  }