"use strict";(self.webpackChunkelyra_ai_site=self.webpackChunkelyra_ai_site||[]).push([[2158],{4626:function(e,t,n){n.r(t),n.d(t,{Title:function(){return l},_frontmatter:function(){return s},default:function(){return h}});var i=n(3366),a=(n(7294),n(4983)),o=n(4295),r=["components"],l=function(){return(0,a.kt)("span",null,"Runtime configuration")},s={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},u=p("PageDescription"),c=p("AnchorLinks"),m=p("AnchorLink"),d={Title:l,_frontmatter:s},g=o.Z;function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)(g,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{mdxType:"PageDescription"},(0,a.kt)("p",null,"A runtime configuration provides Elyra access to external resources, such as Kubeflow Pipelines or Apache Airflow for scalable pipeline execution.")),(0,a.kt)(c,{mdxType:"AnchorLinks"},(0,a.kt)(m,{mdxType:"AnchorLink"},"Prerequisites"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Managing runtime configurations using the JupyterLab UI"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Managing runtime configurations using the Elyra CLI"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Configuration settings"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Verifying runtime configurations"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Troubleshooting")),(0,a.kt)("p",null,"You can manage runtime configurations using the ",(0,a.kt)("a",{parentName:"p",href:"#managing-runtime-configurations-using-the-jupyterlab-ui"},"JupyterLab UI")," or the ",(0,a.kt)("a",{parentName:"p",href:"#managing-runtime-configurations-using-the-elyra-cli"},"Elyra CLI"),"."),(0,a.kt)("h2",null,"Prerequisites"),(0,a.kt)("p",null,"A runtime configuration requires connectivity details for "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Kubeflow Pipelines deployment or an Apache Airflow deployment"),(0,a.kt)("li",{parentName:"ul"},"S3-based Object Storage (e.g. Minio or IBM Cloud Object Storage)")),(0,a.kt)("p",null,"Note: Elyra is only tested with Kubeflow v1.2.x and v1.3.x and Apache Airflow v1.10.x."),(0,a.kt)("h2",null,"Managing runtime configurations using the JupyterLab UI"),(0,a.kt)("p",null,"To create, edit, or delete runtime configurations using the UI select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtimes")," tab from the JupyterLab sidebar, or click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtimes")," button in the Pipeline Editor."),(0,a.kt)("p",null,"  ",(0,a.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"335px"}},"\n      ",(0,a.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVQ4y6WTaa7CMAyEc//bcAD+cQIQUhFQ2kIX1i5ip8VPn1GkqFLf1kijJo4ztseuCcNQdrudZFkmnudJFEUSx7FgT5JEqqoS1vv97gTrdrvJ6/USMxgMZDQaSZ7nMh6PZblcynQ6VUwmEyX9DeH1ev0QlmUpRVHI/X5XQ9M04i4eYP8J5/NZHo+HmDRNteTL5SKn00lBkOfzqcC5rutO2CT2+71yaMnD4VCz4cLiOxIX+FId2VGNWa/X2oR2qX9ZVOX7vu4N+gFEJQrR6Bh7vpy7YP3IFHlUw9lspuw4EIkuLxYLHaPVaqVnKthsNjpSdJ09Nt6RDKOF7Xg8fpqy3W41ijsGVgJrcyVx/eydbZCWTFdpO50KgkCjoS0ZzOdzzYwzmTPw7AF+h8NB35M5s2xwALCjA7pY7dw9QOe2rryxvnwNUWDv02V3Gcve1uy/MOiGBpasL6nht2NcXMJeJVvh3ZL7EH4BdJTZ4JaqdVsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,a.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Access runtime configurations",title:"Access runtime configurations",src:"/static/8b7855575e712d53333cfd09ff07ee82/8d8c1/access-runtime-configurations.png",srcSet:["/static/8b7855575e712d53333cfd09ff07ee82/7fc1e/access-runtime-configurations.png 288w","/static/8b7855575e712d53333cfd09ff07ee82/8d8c1/access-runtime-configurations.png 335w"],sizes:"(max-width: 335px) 100vw, 335px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,a.kt)("h3",null,"Creating a runtime configuration"),(0,a.kt)("p",null,"To create a runtime configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtimes")," tab from the JupyterLab sidebar."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," to add a new runtime configuration and choose the desired runtime configuration type, e.g. Kubeflow Pipelines or Apache Airflow.\n",(0,a.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,a.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAm0lEQVQoz4WRUQ/DIAiE+///bI1WAQ/YUuyDs932hQdictyBW84lpbTvaU85H63WRsRmHmXu/vrOVpuIKOC9e4ePRsSioKr+xCU+gsnhl9Xq3DtaAGAZ33uvgYjM7xacYmYmIgSLWCeexa21UoqInIk/sYkl8FhzA8DMS7ABAAqWUKoK4BITETPfD2tmI/Pd9nIWESL6+6WP134DMhkU1CgQBAAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,a.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Create runtime configuration",title:"Create runtime configuration",src:"/static/b3c1ebc9959670dcabc09c6d1735af26/3cbba/runtime-create-config.png",srcSet:["/static/b3c1ebc9959670dcabc09c6d1735af26/7fc1e/runtime-create-config.png 288w","/static/b3c1ebc9959670dcabc09c6d1735af26/a5df1/runtime-create-config.png 576w","/static/b3c1ebc9959670dcabc09c6d1735af26/3cbba/runtime-create-config.png 1152w","/static/b3c1ebc9959670dcabc09c6d1735af26/0b124/runtime-create-config.png 1728w","/static/b3c1ebc9959670dcabc09c6d1735af26/fc41e/runtime-create-config.png 2103w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,a.kt)("li",{parentName:"ol"},"Provide a runtime configuration display name, an optional description, and tag the configuration to make it more easily discoverable. "),(0,a.kt)("li",{parentName:"ol"},"Enter the Kubeflow Pipelines or Apache Airflow deployment information. Refer to section ",(0,a.kt)("a",{parentName:"li",href:"#kubeflow-pipelines-configuration-settings"},"Kubeflow Pipelines configuration settings")," or ",(0,a.kt)("a",{parentName:"li",href:"#apache-airflow-configuration-settings"},"Apache Airflow configuration settings")," for details."),(0,a.kt)("li",{parentName:"ol"},"Enter the Cloud Storage connectivity information. Refer to section ",(0,a.kt)("a",{parentName:"li",href:"#cloud-storage-settings"},"Cloud Storage settings")," for details."),(0,a.kt)("li",{parentName:"ol"},"Save the runtime configuration. The new entry is displayed in the list."),(0,a.kt)("li",{parentName:"ol"},"Expand the entry and verify that you can access the Kubeflow Pipelines or Apache Airflow GUI and the Cloud Storage GUI using the displayed links.\n",(0,a.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"342px"}},"\n      ",(0,a.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.22222222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVQ4y61Ua3ObMBDk//+pZPpIbOO0jk3i4Dc2GGMM5mEkwHG2syJKaaYfkk41syPdSbc6ne7OcF0XNzc3GI1G6Ha7ME0TnU4HQRCA4+XlBR8ZeZ6jqioY5/MZUkpcLhcFEnCm/jMgGWeDZHEcI4oidYs+8Pz8/GHQid1up+wNKuq6/uO2z5ARbRsD/2GkaYrZbKbWBr177+F7+W/QdvpsWZZNDLnY7/dYLBaYz+fYbrdYrVZwHAfMgM1mA9/34XneG6hn7PU4nU7Kjv/w9uTzmTG4KDDIek1UVa0IFMpSoW7FjT9Mx1TabLceRvcDPD5YGD9amE5sJVujIebTCSb2E45xhHNdoZQCVSkbSKHkUhaQUqAoCkVqONs9rk0L5tDG7cBGz5rjS99Cb2jj+8BG597Gw8LHfHvEyo8x9SLYmwNsN8LUjTBxI/iHFEVxghACRpYX2CcFokxgF2dqJuKMOok4lwjiDEGUIohT7KIGXpgoIurjJG8IpYSxXq/x/dtX3PX76Js9XF9dYTD4qdad21uYvS7qqoQUhQp+njegrCGKZo8xNnZRhrupj7Gzx3AR4M72MFoGGK9D9J5c/Ji4eHAOsFYhZl6ERyfEeH1QpCRpQz2ZrIUQyl3x+osMbvOrzY+qfSGUriRKqT5BQ7zuZ1nWNAcKzPY0SdQBrlmXzRNzBfFqrGWmCNOLYHKTTHlIb47HIxhLJjHbFpOUCcyEZtFzpl7vMbFJ2G5dLI4kSX43h3aSUtbtSMvvS1SHhV61S9GgQRiG6lZdWizD5XKpvGEJEvSee9TpF2jQnq84HA6Nh2yoev4XtDl+AdiOrkU1PKZaAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,a.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Access runtime configuration",title:"Access runtime configuration",src:"/static/6c176779dea5138956018f7f2f0fee8c/f98f8/runtime-access-config.png",srcSet:["/static/6c176779dea5138956018f7f2f0fee8c/7fc1e/runtime-access-config.png 288w","/static/6c176779dea5138956018f7f2f0fee8c/f98f8/runtime-access-config.png 342w"],sizes:"(max-width: 342px) 100vw, 342px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," ")),(0,a.kt)("h3",null,"Modifying a runtime configuration"),(0,a.kt)("p",null,"To edit a runtime configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtimes")," tab from the JupyterLab sidebar."),(0,a.kt)("li",{parentName:"ol"},"Click the pencil next to the runtime configuration.")),(0,a.kt)("h3",null,"Deleting a runtime configuration"),(0,a.kt)("p",null,"To delete a runtime configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtimes")," tab from the JupyterLab sidebar."),(0,a.kt)("li",{parentName:"ol"},"Click the trash can next to the runtime configuration.")),(0,a.kt)("h2",null,"Managing runtime configurations using the Elyra CLI"),(0,a.kt)("p",null,"You can list, create, edit, or delete runtime configurations using the ",(0,a.kt)("inlineCode",{parentName:"p"},"elyra-metadata")," CLI."),(0,a.kt)("h3",null,"Listing runtime configurations"),(0,a.kt)("p",null,"To list runtime configurations run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"elyra-metadata list runtimes\n")),(0,a.kt)("p",null,"The output lists for each runtime the name and the name of the associated JSON formatted metadata file, which is stored in the JupyterLab data directory in the ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata/runtimes")," subdirectory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Available metadata instances for runtimes (includes invalid):\n\nSchema   Instance  Resource  \n------   --------  -------- \nkfp      my_kfp    /Users/jdoe/Library/Jupyter/metadata/runtimes/my_kfp.json\n")),(0,a.kt)("p",null,"To format the output as JSON run ",(0,a.kt)("inlineCode",{parentName:"p"},"elyra-metadata list runtimes --json"),". Note that the JSON export includes the content of the metadata files, not just their names."),(0,a.kt)("h3",null,"Creating a runtime configuration"),(0,a.kt)("p",null,"To create a runtime configuration for a Kubeflow Pipelines deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"elyra-metadata install runtimes \\\n       --display_name=\"My Kubeflow Pipelines Runtime\" \\\n       --api_endpoint=https://kubernetes-service.ibm.com/pipeline \\\n       --api_username=username@email.com \\\n       --api_password=mypassword \\\n       --engine=Argo \\\n       --cos_endpoint=http://minio-service.kubeflow:9000 \\\n       --cos_username=minio \\\n       --cos_password=minio123 \\\n       --cos_bucket=test-bucket \\\n       --tags=\"['kfp', 'v1.0']\" \\\n       --schema_name=kfp\n")),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"#kubeflow-pipelines-configuration-settings"},"Kubeflow Pipelines Configuration settings")," section for an explanation of the parameters."),(0,a.kt)("h3",null,"Modifying a runtime configuration"),(0,a.kt)("p",null,"To edit a runtime configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'elyra-metadata install runtimes \\\n       --replace \\\n       --name="my_kubeflow_pipelines_runtime" \\\n       --display_name="My Kubeflow Pipelines Runtime" \\\n       --api_endpoint=https://kubernetes-service.ibm.com/pipeline \\\n       --api_username=username@email.com \\\n       --api_password=mynewpassword \\\n       --engine=Argo \\\n       --cos_endpoint=http://minio-service.kubeflow:9000 \\\n       --cos_username=minio \\\n       --cos_password=minio123 \\\n       --cos_bucket=test-bucket \\\n       --tags="[\'kfp\', \'v1.1\']" \\\n       --schema_name=kfp\n')),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"#kubeflow-pipelines-configuration-settings"},"Kubeflow Pipelines Configuration settings")," section for an explanation of the parameters. Note that you must specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"--name")," parameter. "),(0,a.kt)("h3",null,"Deleting a runtime configuration"),(0,a.kt)("p",null,"To delete a runtime configuration run the following command, replacing the configuration name as appropriate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"elyra-metadata remove runtimes --name=my_kubeflow_pipelines_runtime\n")),(0,a.kt)("h2",null,"Configuration settings"),(0,a.kt)("h3",null,"Common configuration settings"),(0,a.kt)("p",null,"Configurations include the following   common settings for all supported runtime types. The string in the headings below, which is enclosed in parentheses, denotes the CLI option name."),(0,a.kt)("h4",null,"Name (display_name)"),(0,a.kt)("p",null,"A user-friendly name for runtime configuration. This property is required."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubeflow Pipelines dev environment")),(0,a.kt)("h4",null,"N/A (name)"),(0,a.kt)("p",null,"A unique identifier for this configuration. A value is automatically generated from ",(0,a.kt)("inlineCode",{parentName:"p"},"display_name"),"."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeflow_pipelines_dev_environment")),(0,a.kt)("h4",null,"Description (description)"),(0,a.kt)("p",null,"Description for this runtime image configuration. This property is optional."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubeflow Pipelines deployment in QA")),(0,a.kt)("h4",null,"Tags (tags)"),(0,a.kt)("p",null,"Zero or more tags for this runtime configuration."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"['test-env','airflow']")),(0,a.kt)("h3",null,"Kubeflow Pipelines configuration settings"),(0,a.kt)("p",null,"This section defines the settings for the Kubeflow Pipelines deployment that you want to associate with this runtime configuration."),(0,a.kt)("h4",null,"Kubeflow Pipelines API endpoint (api_endpoint)"),(0,a.kt)("p",null,"The KubeFlow Pipelines API endpoint you want to utilize. This setting is required."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://kubernetes-service.ibm.com/pipeline")),(0,a.kt)("h4",null,"Kubeflow Pipelines user namespace (user_namespace)"),(0,a.kt)("p",null,"The namespace used to run your pipeline in Kubeflow Pipelines. This setting is required if namespaces are defined in Kubeflow Pipelines. SEE NOTE."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymous")),(0,a.kt)("h4",null,"Kubeflow Pipelines API endpoint username (api_username)"),(0,a.kt)("p",null,"Username used to access your KubeFlow Pipelines API endpoint. This setting is required if the Kubeflow Pipelines deployment is multi-user, auth enabled."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"username@email.com")),(0,a.kt)("h4",null,"Kubeflow Pipelines API endpoint (api_password)"),(0,a.kt)("p",null,"Password used to access your KubeFlow Pipelines API endpoint. This setting is required if the Kubeflow Pipelines deployment is multi-user, auth enabled."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"mypassword")),(0,a.kt)("h4",null,"Kubeflow Pipelines engine (engine)"),(0,a.kt)("p",null,"The engine being used by Kubeflow Pipelines to run pipelines: ",(0,a.kt)("inlineCode",{parentName:"p"},"Argo")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Tekton"),". If you have access to the Kubernetes cluster where Kubeflow Pipelines is deployed, run these commands in a terminal window to determine the engine type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# If this command completes successfully, the engine type is Argo.\nkubectl describe configmap -n kubeflow workflow-controller-configmap\n\n# If this command completes successfully, the engine type is Tekton.\nkubectl describe configmap -n kubeflow kfp-tekton-config\n")),(0,a.kt)("p",null,"The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"Argo"),"."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"Argo")),(0,a.kt)("h3",null,"Apache Airflow configuration settings"),(0,a.kt)("p",null,"This section defines the settings for the Apache Airflow deployment that you want to associate with this runtime configuration."),(0,a.kt)("h4",null,"Apache Airflow UI endpoint (api_endpoint)"),(0,a.kt)("p",null,"The Apache Airflow API endpoint you want to utilize. This setting is required."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your-airflow-webserver:port")),(0,a.kt)("h4",null,"Apache Airflow user namespace (user_namespace)"),(0,a.kt)("p",null,"The namespace used to run your DAG in Apache Airflow. The Kubernetes namespace must be configured with the correct permissions prior to use in Apache Airflow. This setting is Optional. "),(0,a.kt)("p",null,"The default namespace is ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymous")),(0,a.kt)("h4",null,"GitHub API Endpoint (github_api_endpoint)"),(0,a.kt)("p",null,"The GitHub (or GitHub Enterprise) API endpoint where the git client will attempt to connect. This setting is required. Keep the default  ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.github.com")," for github.com"),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.private.githubenterprise.com")),(0,a.kt)("h4",null,"GitHub DAG Repository (github_repo)"),(0,a.kt)("p",null,"The GitHub repository that Apache Airflow utilizes to store DAGs. This setting is required and the repository must exist."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"user-or-org/dag-repo-name")),(0,a.kt)("h4",null,"GitHub DAG Repository Branch (github_branch)"),(0,a.kt)("p",null,"The name of the branch in ",(0,a.kt)("inlineCode",{parentName:"p"},"github_repo")," where DAGs are stored.\nThis setting is required and the branch must exist."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"dag-branch")),(0,a.kt)("h4",null,"GitHub Personal Access Token (github_repo_token)"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"},"GitHub personal access token")," with write access to the GitHub DAG Repository. This setting is required. "),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"766f7c267519fee7c71d7f96bdf42e646dc65433")),(0,a.kt)("h3",null,"Cloud Storage settings"),(0,a.kt)("p",null,"This section defines the settings for the cloud storage that you want to associate with this runtime configuration."),(0,a.kt)("h4",null,"Cloud Object Storage endpoint (cos_endpoint)"),(0,a.kt)("p",null,"This should be the URL address of your S3-compatible Object Storage. If running an Object Storage Service within a Kubernetes cluster (Minio), you can use the Kubernetes local DNS address. This setting is required."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://minio-service.kubeflow:9000")),(0,a.kt)("h4",null,"Cloud Object Storage Credentials Secret (cos_secret)"),(0,a.kt)("p",null,"(Optional) Kubernetes secret that’s defined in the specified user namespace, containing the Cloud Object Storage username and password.\nIf specified, this secret must exist on the Kubernetes cluster hosting your pipeline runtime in order to successfully\nexecute pipelines. This setting is optional but is recommended for use in shared environments to avoid exposing a user’s\nCloud Object Storage credentials. "),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"my-cos-secret")),(0,a.kt)("p",null,"The following is an example of how your secret on the Kubernetes cluster hosting your runtime should be defined. The variable\nnames defined under ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),", must be ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," followed by each respective value\nencoded in base64. Learn how to create, deploy, or configure ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kubernetes Secrets"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: <cos_secret>\ntype: Opaque\ndata:\n  AWS_ACCESS_KEY_ID: <BASE64_ENCODED_YOUR_AWS_ACCESS_KEY_ID>\n  AWS_SECRET_ACCESS_KEY: <BASE64_ENCODED_YOUR_AWS_SECRET_ACCESS_KEY>\n")),(0,a.kt)("h4",null,"Cloud Object Storage username (cos_username)"),(0,a.kt)("p",null,"Username used to access the Object Storage. This setting is required."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"minio")),(0,a.kt)("h4",null,"Cloud Object Storage password (cos_password)"),(0,a.kt)("p",null,"Password for cos_username. This setting is required."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"minio123")),(0,a.kt)("h4",null,"Cloud Object Storage bucket name (cos_bucket)"),(0,a.kt)("p",null,"Name of the bucket you want Elyra to store pipeline artifacts in. This setting is required. If the bucket doesn’t exist, it will be created. The specified bucket name must meet the naming conventions imposed by the Object Storage service."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"test-bucket")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If using IBM Cloud Object Storage, you must generate a set of ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/cloud-object-storage/hmac?topic=cloud-object-storage-uhc-hmac-credentials-main"},"HMAC Credentials"),"\nand grant that key at least ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/cloud-object-storage/iam?topic=cloud-object-storage-iam-bucket-permissions"},"Writer")," level privileges.\nSpecify ",(0,a.kt)("inlineCode",{parentName:"p"},"access_key_id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret_access_key")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"cos_username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cos_password"),", respectively.")),(0,a.kt)("h2",null,"Verifying runtime configurations"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/elyra-ai/examples/pipelines/setup_validation"},"Elyra examples repository contains a basic pipeline")," that you can use to verify your runtime configurations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Launch JupyterLab."),(0,a.kt)("li",{parentName:"ol"},"Clone ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/elyra-ai/examples.git")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Git")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone A Repository"),") into the current working directory."),(0,a.kt)("li",{parentName:"ol"},"In the File Browser navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"examples/pipelines/setup_validation/")," and follow the instructions in ",(0,a.kt)("inlineCode",{parentName:"li"},"README.md"),". If your runtime configuration is correct and the target runtime environment configured correctly, the validation pipeline should run as is without any modifications.")),(0,a.kt)("h2",null,"Troubleshooting"),(0,a.kt)("p",null,"I am seeing this error when using Elyra with Kubeflow Pipelines that is Dex enabled: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'HTTP response body: {"error":"Validate experiment request failed.: Invalid input error: Invalid resource references for experiment. Expect one namespace type with owner relationship.\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ensure that you have logged into the Kubeflow Dex landing page (",(0,a.kt)("a",{parentName:"p",href:"https://kubeflow.cluster:31380...."},"https://kubeflow.cluster:31380…"),") at least once with\nyour credentials via the GUI. You should have been greeted with a dialog box and request to create a new namespace.\nWithout this step complete, Elyra will not be able to create pipelines on the Kubeflow cluster. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ensure you’ve configured Kubeflow Pipelines credentials and that they are correct. When using Dex, the ",(0,a.kt)("inlineCode",{parentName:"p"},"api_username")," is typically\nyour email address and ",(0,a.kt)("inlineCode",{parentName:"p"},"user_namespace")," is your email shortname (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"elyra")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"elyra@email.org"),")."))))}h.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return w}});var i=n(7294),a=n(8650),o=n.n(a),r=n(5444),l=n(9403),s=n(5611),p=n(5900),u=n.n(p),c=function(e){var t,n=e.title,a=e.theme,o=e.tabs,r=void 0===o?[]:o;return i.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===a,t))},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},m=function(e){var t=e.relativePagePath,n=e.repository,a=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,l=o.baseUrl,s=o.subDirectory,p=l+"/edit/"+o.branch+s+"/src/pages"+t;return l?i.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"bx--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},d=n(4275),g=n(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,l=a.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),s=n===l,p=new RegExp(l+"/?(#.*)?$"),c=a.replace(p,n);return i.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},i.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(i.Component),k=h,f=n(2881),b=n(6958),A=n(36),y=function(e){var t=e.date,n=new Date(t);return t?i.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(A.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,n=e.children,a=e.location,p=e.Title,u=t.frontmatter,g=void 0===u?{}:u,h=t.relativePagePath,A=t.titleType,w=g.tabs,N=g.title,C=g.theme,E=g.description,v=g.keywords,x=g.date,T=(0,b.Z)().interiorTheme,S=(0,r.useStaticQuery)("2456312558").site.pathPrefix,_=S?a.pathname.replace(S,""):a.pathname,P=w?_.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",I=C||T;return i.createElement(s.Z,{tabs:w,homepage:!1,theme:I,pageTitle:N,pageDescription:E,pageKeywords:v,titleType:A},i.createElement(c,{title:p?i.createElement(p,null):N,label:"label",tabs:w,theme:I}),w&&i.createElement(k,{title:N,slug:_,tabs:w,currentTab:P}),i.createElement(f.Z,{padded:!0},n,i.createElement(m,{relativePagePath:h}),i.createElement(y,{date:x})),i.createElement(d.Z,{pageContext:t,location:a,slug:_,tabs:w,currentTab:P}),i.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-user-guide-runtime-configuration-mdx-11b61209da3c04fb6b80.js.map