import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Code, Link } from '@ovhcloud/ods-react';
import { Fragment, type ReactElement} from 'react';

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

                      <div>
                        {
                          item.nodes.map((node: any, i: number) => (
                            <Fragment key={ i }>
                              <Code>
                                { node.html }
                              </Code>
                              <br />
                              <span>
                                { node.failureSummary }
                              </span>
                              <br/>
                            </Fragment>
                          ))
                        }
                      </div>
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
