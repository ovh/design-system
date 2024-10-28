import { OdsSelect } from '@ovhcloud/ods-components/react';
import { useQuery } from '@tanstack/react-query';
import React, { type ReactElement, useState } from 'react';

function TestSelect(): ReactElement {
  const [isPending, setIsPending] = useState(true)
  const [data, setData] = useState<{ id: string, title: string }[]>([])

  const query = useQuery({
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json(),
    ),
    queryKey: ['repoData'],
  });

  setTimeout(() => {
    setIsPending(query.isPending);
    setData(query.data);
  }, 100000);

  return (
    <div>
      <OdsSelect
        name="organization"
        value=""
        defaultValue=""
        isDisabled={isPending ? true : undefined}
      >
        { data?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        )) }
      </OdsSelect>

    </div>
  );
}

export { TestSelect };
