import get from "lodash/get";
import Record from '../types/Record'
import Filter from "../types/Filter";
import Column from "../types/Column";

type StringIncludes = (text: string, find: string) => Boolean;

const stringIncludes:StringIncludes = (text, find) => text.toUpperCase?.().includes(find.toUpperCase())

export default (filter: Filter | {}, data: Record[], columns: Column[]) =>
  data.filter((record) =>
    Object.entries(filter).reduce(
      (acc, [accessor, value]) => stringIncludes(get(record, accessor), value) && acc,
      true
    )
  );