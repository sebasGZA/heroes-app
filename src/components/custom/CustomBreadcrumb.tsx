import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react";
import { Link } from "react-router";


interface Breadcrum {
  lable: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrum?: Breadcrum[];
}

export const CustomBreadcrumb = ({ currentPage, breadcrum = [] }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to='/'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        {
          breadcrum.map((bc) => (
            <div className="flex items-center">
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to={bc.to}>{bc.lable}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))
        }
        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">
            {currentPage}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}