// @ts-nocheck
import * as __fd_glob_34 from "../content/docs/reference-guides/cli/version.mdx?collection=docs"
import * as __fd_glob_33 from "../content/docs/reference-guides/cli/task.mdx?collection=docs"
import * as __fd_glob_32 from "../content/docs/reference-guides/cli/spc.mdx?collection=docs"
import * as __fd_glob_31 from "../content/docs/reference-guides/cli/runbook.mdx?collection=docs"
import * as __fd_glob_30 from "../content/docs/reference-guides/cli/qualityfolio-cli.mdx?collection=docs"
import * as __fd_glob_29 from "../content/docs/reference-guides/cli/mdast.mdx?collection=docs"
import * as __fd_glob_28 from "../content/docs/reference-guides/cli/init.mdx?collection=docs"
import * as __fd_glob_27 from "../content/docs/reference-guides/cli/help.mdx?collection=docs"
import * as __fd_glob_26 from "../content/docs/reference-guides/cli/doctor.mdx?collection=docs"
import * as __fd_glob_25 from "../content/docs/reference-guides/configuration.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/reference-guides/cli-commands.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/getting-started/quick-start.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/getting-started/introduction.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/getting-started/installation.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/contributing-and-support/spry-help.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/contributing-and-support/contributing-to-spry.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/core-concepts/templates-and-partials.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/core-concepts/task-orchestration.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/core-concepts/sql-page-integration.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/core-concepts/executable-markdown.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/core-concepts/environment-variables.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/core-concepts/dag.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/core-concepts/common-workflows.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/core-concepts/ast.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/advanced/troubleshooting.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/advanced/best-practices.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/test.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_6 } from "../content/docs/reference-guides/cli/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/reference-guides/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/getting-started/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/core-concepts/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/contributing-and-support/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/advanced/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
} & {
  DocData: {
    docs: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
  }
}>({"doc":{"passthroughs":["extractedReferences","lastModified"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "advanced/meta.json": __fd_glob_1, "contributing-and-support/meta.json": __fd_glob_2, "core-concepts/meta.json": __fd_glob_3, "getting-started/meta.json": __fd_glob_4, "reference-guides/meta.json": __fd_glob_5, "reference-guides/cli/meta.json": __fd_glob_6, }, {"index.mdx": __fd_glob_7, "test.mdx": __fd_glob_8, "advanced/best-practices.mdx": __fd_glob_9, "advanced/troubleshooting.mdx": __fd_glob_10, "core-concepts/ast.mdx": __fd_glob_11, "core-concepts/common-workflows.mdx": __fd_glob_12, "core-concepts/dag.mdx": __fd_glob_13, "core-concepts/environment-variables.mdx": __fd_glob_14, "core-concepts/executable-markdown.mdx": __fd_glob_15, "core-concepts/sql-page-integration.mdx": __fd_glob_16, "core-concepts/task-orchestration.mdx": __fd_glob_17, "core-concepts/templates-and-partials.mdx": __fd_glob_18, "contributing-and-support/contributing-to-spry.mdx": __fd_glob_19, "contributing-and-support/spry-help.mdx": __fd_glob_20, "getting-started/installation.mdx": __fd_glob_21, "getting-started/introduction.mdx": __fd_glob_22, "getting-started/quick-start.mdx": __fd_glob_23, "reference-guides/cli-commands.mdx": __fd_glob_24, "reference-guides/configuration.mdx": __fd_glob_25, "reference-guides/cli/doctor.mdx": __fd_glob_26, "reference-guides/cli/help.mdx": __fd_glob_27, "reference-guides/cli/init.mdx": __fd_glob_28, "reference-guides/cli/mdast.mdx": __fd_glob_29, "reference-guides/cli/qualityfolio-cli.mdx": __fd_glob_30, "reference-guides/cli/runbook.mdx": __fd_glob_31, "reference-guides/cli/spc.mdx": __fd_glob_32, "reference-guides/cli/task.mdx": __fd_glob_33, "reference-guides/cli/version.mdx": __fd_glob_34, });