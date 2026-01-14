// @ts-ignore - Imports needed for generate-recipes-json script to detect ODS components
import { Link, Text, Clipboard, Icon, Button, ICON_NAME, Badge, Skeleton } from "@ovhcloud/ods-react";
import { type JSX } from "react";
import { DashboardBox } from "../namespace";
import "./index.module.css";

const DashboardBoxComponent = (): JSX.Element => {
  return (
    <DashboardBox.Root title="Tile Header">
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Sample Term" />
        <DashboardBox.Item.Description label="Sample Description" />
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Edit Description" tooltip="Lorem ipsum dolor sit amet." />
        <DashboardBox.Item.Description>
          <div className="flex justify-between">
            <Text preset="span">Sample Description</Text>
            <Button variant="ghost" size="xs">
              <Icon name={ICON_NAME.pen}></Icon>
            </Button>
          </div>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Long Text" />
        <DashboardBox.Item.Description>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Text>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Item with Description & Link"></DashboardBox.Item.Term>
        <DashboardBox.Item.Description
          label="Lorem ipsum dolor sit amet"
          divider={false}
        ></DashboardBox.Item.Description>
        <DashboardBox.Item.Description>
          <Link href="https://www.ovhcloud.com">
            Link <Icon name={ICON_NAME.externalLink} />
          </Link>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Item with Badge"></DashboardBox.Item.Term>
        <DashboardBox.Item.Description>
          <Badge>Coming Soon</Badge>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Loading" />
        <DashboardBox.Item.Description>
          <Skeleton />
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Clipboard" />
        <DashboardBox.Item.Description>
          <Clipboard className="w-full" value="example value" />
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
    </DashboardBox.Root>
  );
};

export { DashboardBoxComponent as DashboardBox };

