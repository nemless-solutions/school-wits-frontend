export interface TableColumnDef {
  key?: string;
  title?: string;
  colKey: string;
  width?: string;
  className?: string;
  style?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (data: any) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumnDef[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  zebra?: boolean;
}

export const Table = function ({ columns, data, zebra }: TableProps) {
  return (
    <table className="w-full h-full flex flex-col table-auto text-left">
      <thead className="md:h-12 w-full rounded-md overflow-hidden">
        <tr className="w-full flex flex-row">
          {columns.map((col, index) => (
            <th
              key={col.key}
              style={{ width: col.width }}
              className={"bg-base-100 p-4 flex-grow-1" + col.className || ""}
            >
              <p
                className={`font-bold leading-none opacity-80 ${
                  columns.length - 1 <= index ? "text-center" : ""
                }`}
              >
                {col.title}
              </p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex-1 bg-base-300 overflow-y-scroll md:w-full">
        {data.map((row, index) => {
          const isDark = index % 2 !== 0;

          return (
            <tr
              key={index}
              className={`w-full flex my-2 rounded-md shadow-card ${
                zebra && isDark ? "bg-base-100" : "bg-base-200"
              }`}
            >
              {columns.map((column, index) => {
                const value = row[column.colKey];
                return (
                  <td
                    className="p-4"
                    key={index}
                    style={{ width: column.width }}
                  >
                    {column.render ? (
                      column.render(row)
                    ) : (
                      <p className="font-normal">{value}</p>
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

{
  /* 
<tfoot className="border-b border-blue-gray-100">
  <tr className="p-3 flex items-center justify-between border-t border-blue-gray-50">
          <td>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page {pagination?.currentPage} of {pagination?.lastPage}
            </Typography>
          </td>
          <td className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === 1}
              className="md:block hidden"
              onClick={() => {
                pagination &&
                  pagination.pageChanged(pagination.currentPage - 1);
              }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === 1}
              className="block md:hidden m-0 p-0 border-0"
              onClick={() => {
                pagination &&
                  pagination.pageChanged(pagination.currentPage - 1);
              }}
            >
              <Icon size={22} name="leftArrow" variant="text" />
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === pagination?.lastPage}
              className="md:hidden block m-0 p-0 border-0"
              onClick={() => {
                pagination &&
                  pagination.pageChanged(pagination.currentPage + 1);
              }}
            >
              <Icon size={22} name="rightArrow" variant="text" />
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={pagination?.currentPage === pagination?.lastPage}
              className="hidden md:block"
              onClick={() => {
                pagination &&
                  pagination.pageChanged(pagination.currentPage + 1);
              }}
            >
              Next
            </Button>
          </td>
        </tr> 
</tfoot>;

  */
}
