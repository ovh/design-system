import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Link } from '@ovhcloud/ods-react';
import { type ReactElement } from 'react';

type Prop = {
  list: any[],
  title: string
}

function ResultDetails({ list, title }: Prop): ReactElement {
  return (
    <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          { title } ({ list.length })
        </AccordionTrigger>
        <AccordionContent>
          {
            list.length ?
              <ul>
                {
                  list.map((item: any, idx: number) => (
                    <li key={ idx }>
                      <Link
                        href={ item.helpUrl }
                        target="_blank">
                        { item.id }
                      </Link> ({ item.description })
                    </li>
                  ))
                }
              </ul> : 'All good!'
          }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export { ResultDetails };
