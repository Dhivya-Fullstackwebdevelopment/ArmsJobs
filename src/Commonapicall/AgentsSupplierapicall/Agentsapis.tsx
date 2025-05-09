
import { AgentSupplier, ApiResponse } from '../../pages/AgentsSupplier/AgentsSupplierTable';
import { apiAxios } from '../apiUrl';
import { Agent, AgentSearchResponse } from '../../pages/AgentsSupplier/AgentSupplierView';



export const fetchAgentsList = async (): Promise<ApiResponse> => {
  try {
    const response = await apiAxios.get('/api/agents/');

    if (!response.data || response.status !== 200) {
      throw new Error("Failed to fetch candidates");
    }

    console.log("Candidates API response", response.data);

    return response.data as ApiResponse;
  } catch (error: any) {
    console.error("Error fetching agents:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || "Unable to fetch agents. Please try again later.");
  }
};


export const fetchAgentsListById = async (id: number): Promise<AgentSupplier> => {
  try {
    const response = await apiAxios.get<ApiResponse>(
      `/api/agents/${id}/`
    );

    if (!response.data || response.status !== 200) {
      throw new Error("Failed to fetch agent");
    }

    console.log("Agent API response", response.data);

    return response.data.data; // ✅ return only the agent data
  } catch (error: any) {
    console.error("Error fetching agent:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || "Unable to fetch agent. Please try again later.");
  }
};



export const deleteAgentData = async (Id: number): Promise<boolean> => {
    try {
      const response = await apiAxios.post("/api/agents/delete/", { id: Id });
      
      if (response.status === 200) {
        return true; // Success
      }
      throw new Error("Failed to delete agent");
    } catch (error: any) {
      console.error("Error deleting agent:", error);
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        "Failed to delete agent. Please try again."
      );
    }
  };






export const fetchAgentById = async (id: number): Promise<AgentSupplier> => {
  try {
    const response = await apiAxios.get<{ data: AgentSupplier }>(
      `/api/agents/${id}/`
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch agent');
  }
};



export const updateAgent = async (id: number, agentData: Partial<AgentSupplier>): Promise<AgentSupplier> => {
  try {
    const response = await apiAxios.patch<{ data: AgentSupplier }>(`/api/agents/update/${id}/`, agentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.data;
  } catch (error) {
    throw new Error('Failed to update agent');
  }
};



export const getAgentDetailsById = async (id: number): Promise<AgentSupplier> => {
  const response = await apiAxios.get<{ data: AgentSupplier}>(
    `/api/agents/${id}/`
  );

  console.log(" response.data.data", response.data.data)
  return response.data.data;
};




export const searchAgents = async (query: string): Promise<ApiResponse> => {
  try {
      const response = await apiAxios.get<ApiResponse>(
          `/api/agents/?search=${encodeURIComponent(query)}`
      );
      return response.data;
  } catch (error) {
      console.error("Error searching agents:", error);
      throw error;
  }
};


export const fetchAgents = async (query: string): Promise<Agent[]> => {
  try {
    const res = await apiAxios.get<AgentSearchResponse>("/api/agents/name-list/", {
      params: { search: query },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error fetching agents", error);
    return [];
  }
};