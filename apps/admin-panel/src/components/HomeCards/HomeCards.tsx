import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@school-wits/ui";

interface HomeCardsProps {
  data: { title: string; amount: number }[];
  isLoading?: boolean;
}

export function HomeCards({ data, isLoading }: HomeCardsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <Card className="@container/card" key={item.title}>
            <CardHeader>
              <CardDescription>
                <Skeleton className="w-[200px] h-5" />
              </CardDescription>
              <CardTitle>
                <Skeleton className="w-[70px] h-10" />
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <Card className="@container/card" key={item.title}>
          <CardHeader>
            <CardDescription className="text-base">
              {item.title}
            </CardDescription>
            <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {item.amount}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
