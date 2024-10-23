import { OdsSelect } from '@ovhcloud/ods-components/react';
import { useQuery } from '@tanstack/react-query';
import React, { type ReactElement } from 'react';

function TestSelect(): ReactElement {
  // const [isLoading, setIsLoading] = useState(true);

  const { isPending, data } = useQuery({
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json(),
    ),
    queryKey: ['repoData'],
  });

  console.log('isPending', isPending, data);
  // setTimeout(() => setIsLoading(false), 5000);

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
