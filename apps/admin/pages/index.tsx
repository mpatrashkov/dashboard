import {
  Button,
  DataGrid,
  Input,
  Modal,
  useLocalDataSource,
  WithModal,
} from '@devmax/ui';
import { range } from 'lodash';
import { Edit, Eye, Plus, Search, Trash } from 'tabler-icons-react';
import Navbar from '../components/navbar/navbar';
import Topbar from '../components/topbar/topbar';
import styles from './index.module.scss';

const items = range(0, 500).map((index) => {
  if (index % 2 === 0) {
    return {
      id: index,
      name: 'Marketing',
      createdAt: new Date(2020, 11, 27, 10, 40, 32),
    };
  }

  return {
    id: index,
    name: 'Development',
    createdAt: new Date(2020, 10, 24, 10, 40, 32),
  };
});

export function Index() {
  const dataSource = useLocalDataSource(items);

  return (
    <div>
      <div className="flex flex-row">
        <Navbar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <div className="w-full flex-1 bg-gray-100">
            <div className="p-10">
              <h2 className="font-bold text-2xl">Categories</h2>
              <div className="flex justify-between pt-3">
                <div className="w-[400px]">
                  <Input
                    placeholder="Search in categories"
                    icon={Search}
                    slim
                    fluid
                  />
                </div>
                <div>
                  <WithModal modal={<Modal />}>
                    {(open) => (
                      <Button variant="primary" onClick={open} icon={<Plus />}>
                        Create Category
                      </Button>
                    )}
                  </WithModal>
                </div>
              </div>
              <div className="pt-5">
                {/* <Table /> */}
                <DataGrid
                  dataSource={dataSource}
                  columns={[
                    {
                      dataField: 'id',
                      label: 'ID',
                    },
                    {
                      dataField: 'name',
                      label: 'Name',
                    },
                    {
                      dataField: 'createdAt',
                      label: 'Created At',
                      customTemplate(row) {
                        return <>{row.createdAt.toUTCString()}</>;
                      },
                    },
                  ]}
                  primaryKey="id"
                  renderActions={(item) => (
                    <div className="flex -mx-2">
                      <Button slim icon={<Eye />} />
                      <Button slim icon={<Edit />} />
                      <Button slim icon={<Trash />} />
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
